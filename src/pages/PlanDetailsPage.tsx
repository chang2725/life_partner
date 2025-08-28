import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, Users, Shield, Heart, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AgentId = import.meta.env.VITE_API_AUTH_TOKEN;

const PlanDetailsPage = () => {
    const { planName } = useParams();
    const decodedPlanName = decodeURIComponent(planName || '');
    const [planDetails, setPlanDetails] = useState({
        id: null,
        name: "",
        description: "",
        category: "",
        minEntryAge: null,
        maxEntryAge: null,
        maturityAge: null,
        minSumAssured: null,
        maxSumAssured: null,
        premiumPaymentTerm: "",
        policyTerm: "",
        features: [],
        benefits: [],
        eligibility: "",
        documentsRequired: [],
        popularity: "",
        claimSettlementRatio: "",
        agentId: null,
    });

    const [isLoading, setIsLoading] = useState(true);
    const [relatedPlans, setRelatedPlans] = useState([]);
    const sidebarRef = useRef(null);
    const scrollInterval = useRef(null);
    const scrollDirection = useRef(1); // 1 for down, -1 for up

    useEffect(() => {
        const fetchPlanDetails = async () => {
            try {
                setIsLoading(true);

                // Direct API call
                if (decodedPlanName.toLowerCase().includes('nonexistent')) {
                    setPlanDetails(null);
                } else {
                    const response = await axios.get(
                        `${API_BASE_URL}/api/Plans/byname/${decodedPlanName}`
                    );

                    if (!response.data.data[0] || response.data.data[0].name !== decodedPlanName) {
                        setPlanDetails(null);
                    } else {
                        const raw = response.data.data[0];
                        const normalized = {
                            ...raw,
                            features: JSON.parse(raw.features || "[]"),
                            benefits: JSON.parse(raw.benefits || "[]"),
                            documentsRequired: JSON.parse(raw.documentsRequired || "[]"),
                        };
                        setPlanDetails(normalized);
                        const response2 = await axios.get(
                            `${API_BASE_URL}/api/Plans/RelatedPlans/${normalized.category}`
                        );
                        const data = response2.data.data;
                        console.log("Fetched plan data:", data);
                        setRelatedPlans(data);

                    }
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching plan details:", error);
                setIsLoading(false);
            }
        };

        if (decodedPlanName) {
            fetchPlanDetails();
            console.log("Fetching details for plan:", planDetails);
        }

        return () => {
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
            }
        };
    }, [decodedPlanName]);

    useEffect(() => {
        if (relatedPlans.length > 0 && sidebarRef.current) {
            const sidebar = sidebarRef.current;
            const content = sidebar.querySelector('.related-plans-container');

            if (content && content.scrollHeight > sidebar.clientHeight) {
                scrollInterval.current = setInterval(() => {
                    const currentScroll = content.scrollTop;
                    const maxScroll = content.scrollHeight - content.clientHeight;

                    if (scrollDirection.current === 1) {
                        // Scrolling down
                        if (currentScroll < maxScroll) {
                            content.scrollTop += 1;
                        } else {
                            // Reached bottom, change direction
                            scrollDirection.current = -1;
                        }
                    } else {
                        // Scrolling up
                        if (currentScroll > 0) {
                            content.scrollTop -= 1;
                        } else {
                            // Reached top, change direction
                            scrollDirection.current = 1;
                        }
                    }
                }, 30);
            }
        }

        return () => {
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
            }
        };
    }, [relatedPlans]);

    const handleSidebarHover = (isHovering) => {
        if (scrollInterval.current) {
            if (isHovering) {
                clearInterval(scrollInterval.current);
            } else {
                // Restart the scrolling when mouse leaves
                const sidebar = sidebarRef.current;
                const content = sidebar.querySelector('.related-plans-container');

                if (content && content.scrollHeight > sidebar.clientHeight) {
                    scrollInterval.current = setInterval(() => {
                        const currentScroll = content.scrollTop;
                        const maxScroll = content.scrollHeight - content.clientHeight;

                        if (scrollDirection.current === 1) {
                            if (currentScroll < maxScroll) {
                                content.scrollTop += 1;
                            } else {
                                scrollDirection.current = -1;
                            }
                        } else {
                            if (currentScroll > 0) {
                                content.scrollTop -= 1;
                            } else {
                                scrollDirection.current = 1;
                            }
                        }
                    }, 30);
                }
            }
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-lg text-gray-600 mb-2">Loading plan details...</div>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                </div>
            </div>
        );
    }

    if (!planDetails) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Plan Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        Oops! It seems this plan has gone on an adventure without us.
                        Maybe it's exploring the insurance universe?
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-8">
                        <p>While you're here, did you know?</p>
                        <p>The first known insurance policy was written on London's Lombard Street in 1583!</p>
                    </div>
                    <Button asChild>
                        <Link to="/life-insurance">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Safety
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Button variant="outline" className="mb-4" asChild>
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Plans
                        </Link>
                    </Button>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6">
                        <div>
                            <Badge variant="secondary" className="mb-2">
                                {planDetails.category}
                            </Badge>
                            <h1 className="text-3xl font-bold text-gray-900">{planDetails.name}</h1>
                            <p className="text-gray-600 mt-2">{planDetails.description}</p>
                        </div>
                        <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700" asChild>
                            <Link to="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Main Content - 2/3 width */}
                    <div className="w-full lg:w-2/3">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid grid-cols-3 mb-6">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="features">Features & Benefits</TabsTrigger>
                                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Plan Overview</CardTitle>
                                        <CardDescription>
                                            Comprehensive details about {planDetails.name}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex items-start">
                                                <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">Policy Term</h3>
                                                    <p className="text-gray-600">{planDetails.policyTerm}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <DollarSign className="h-6 w-6 text-green-600 mr-3 mt-1" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">Sum Assured</h3>
                                                    <p className="text-gray-600">₹{planDetails.minSumAssured.toLocaleString()} to ₹{planDetails.maxSumAssured.toLocaleString()}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <Users className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">Entry Age</h3>
                                                    <p className="text-gray-600">{planDetails.minEntryAge} to {planDetails.maxEntryAge} years</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <Shield className="h-6 w-6 text-red-600 mr-3 mt-1" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">Maturity Age</h3>
                                                    <p className="text-gray-600">Up to {planDetails.maturityAge} years</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-3">Key Highlights</h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                                                    <span className="text-gray-600">Claim Settlement Ratio: {planDetails.claimSettlementRatio}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                                                    <span className="text-gray-600">Popularity: {planDetails.popularity}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                                                    <span className="text-gray-600">Tax benefits under Section 80C and 10(10D)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="features">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Features & Benefits</CardTitle>
                                        <CardDescription>
                                            What makes {planDetails.name} a great choice
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-3">Key Features</h3>
                                            <ul className="space-y-2">
                                                {planDetails.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                                                        <span className="text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-3">Benefits</h3>
                                            <ul className="space-y-2">
                                                {planDetails.benefits.map((benefit, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <Heart className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                                                        <span className="text-gray-600">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="eligibility">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Eligibility & Documentation</CardTitle>
                                        <CardDescription>
                                            Requirements for purchasing {planDetails.name}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-3">Eligibility Criteria</h3>
                                            <p className="text-gray-600">{planDetails.eligibility}</p>
                                        </div>

                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-3">Documents Required</h3>
                                            <ul className="space-y-2">
                                                {planDetails.documentsRequired.map((doc, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <FileText className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                                        <span className="text-gray-600">{doc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar - 1/3 width */}
                    <div
                        ref={sidebarRef}
                        className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-8"
                        onMouseEnter={() => handleSidebarHover(true)}
                        onMouseLeave={() => handleSidebarHover(false)}
                    >
                        {relatedPlans.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Related Plans</CardTitle>
                                    <CardDescription>
                                        Other plans you might be interested in
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="related-plans-container space-y-4" style={{ maxHeight: '400px', overflowY: 'hidden' }}>
                                        {relatedPlans.map(plan => (
                                            <div key={plan.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                                <h4 className="font-medium text-gray-900">{plan.name}</h4>
                                                <Badge variant="outline" className="my-2">{plan.category}</Badge>
                                                <p className="text-sm text-gray-600">{plan.description}</p>
                                                <Button variant="link" className="p-0 h-auto mt-2" asChild>
                                                    <Link to={`/plan-details/${encodeURIComponent(plan.name)}`}>
                                                        View Details
                                                    </Link>
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetailsPage;