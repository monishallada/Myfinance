"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    age: "",
    hasJob: "",
    income: "",
    investmentHorizon: "",
    investmentAmount: "",
    goals: [],
    riskTolerance: "",
    businessInterest: "",
    businessDetails: "",
    realEstateInterest: "",
    realEstateType: "",
    experienceLevel: "",
  })

  const totalSteps = 10
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleGoalToggle = (goal) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }))
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">What is your age?</h2>
              <p className="text-gray-400">We need to ensure you're eligible to invest</p>
            </div>
            <RadioGroup
              value={formData.age}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, age: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="18-25" id="age1" />
                <Label htmlFor="age1" className="text-white cursor-pointer flex-1">
                  18-25 years old
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="26-35" id="age2" />
                <Label htmlFor="age2" className="text-white cursor-pointer flex-1">
                  26-35 years old
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="36-50" id="age3" />
                <Label htmlFor="age3" className="text-white cursor-pointer flex-1">
                  36-50 years old
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="50+" id="age4" />
                <Label htmlFor="age4" className="text-white cursor-pointer flex-1">
                  50+ years old
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">Do you have a job?</h2>
              <p className="text-gray-400">This helps us understand your income stability</p>
            </div>
            <RadioGroup
              value={formData.hasJob}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, hasJob: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="yes" id="job-yes" />
                <Label htmlFor="job-yes" className="text-white cursor-pointer flex-1">
                  Yes, I have a job
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="no" id="job-no" />
                <Label htmlFor="job-no" className="text-white cursor-pointer flex-1">
                  No, I don't have a job
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">How much do you make per year?</h2>
              <p className="text-gray-400">Your annual income helps us tailor recommendations</p>
            </div>
            <RadioGroup
              value={formData.income}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, income: value }))}
            >
              {["$10k-$50k", "$50k-$100k", "$100k-$250k", "$250k-$500k", "$500k+"].map((range, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm"
                >
                  <RadioGroupItem value={range} id={`income-${index}`} />
                  <Label htmlFor={`income-${index}`} className="text-white cursor-pointer flex-1">
                    {range}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">What is your investment horizon?</h2>
              <p className="text-gray-400">How long do you plan to invest for?</p>
            </div>
            <RadioGroup
              value={formData.investmentHorizon}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, investmentHorizon: value }))}
            >
              {["<1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"].map((period, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm"
                >
                  <RadioGroupItem value={period} id={`horizon-${index}`} />
                  <Label htmlFor={`horizon-${index}`} className="text-white cursor-pointer flex-1">
                    {period}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">How much money do you have to invest?</h2>
              <p className="text-gray-400">Your initial investment amount</p>
            </div>
            <RadioGroup
              value={formData.investmentAmount}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, investmentAmount: value }))}
            >
              {["$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k-$250k", "$250k-$500k", "$500k+"].map((amount, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm"
                >
                  <RadioGroupItem value={amount} id={`amount-${index}`} />
                  <Label htmlFor={`amount-${index}`} className="text-white cursor-pointer flex-1">
                    {amount}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">What do you want to gain from this?</h2>
              <p className="text-gray-400">Select as many as you'd like</p>
            </div>
            <div className="space-y-3">
              {[
                "Passive income",
                "Maintain money",
                "Get money goals on a day-to-day basis",
                "Diversification",
                "Growth",
              ].map((goal, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm"
                >
                  <Checkbox
                    id={`goal-${index}`}
                    checked={formData.goals.includes(goal)}
                    onCheckedChange={() => handleGoalToggle(goal)}
                  />
                  <Label htmlFor={`goal-${index}`} className="text-white cursor-pointer flex-1">
                    {goal}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">What is your risk tolerance?</h2>
              <p className="text-gray-400">How comfortable are you with investment risk?</p>
            </div>
            <RadioGroup
              value={formData.riskTolerance}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, riskTolerance: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="low" id="risk-low" />
                <Label htmlFor="risk-low" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">Low (stable returns)</div>
                    <div className="text-sm text-gray-400">I prefer steady, predictable returns</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="medium" id="risk-medium" />
                <Label htmlFor="risk-medium" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">Medium</div>
                    <div className="text-sm text-gray-400">I'm comfortable with some ups and downs</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="high" id="risk-high" />
                <Label htmlFor="risk-high" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">High (high risk, high reward)</div>
                    <div className="text-sm text-gray-400">I'm willing to take big risks for big returns</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">
                Are you open to opening private businesses or franchises?
              </h2>
              <p className="text-gray-400">Business ownership opportunities</p>
            </div>
            <RadioGroup
              value={formData.businessInterest}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, businessInterest: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="yes" id="business-yes" />
                <Label htmlFor="business-yes" className="text-white cursor-pointer flex-1">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="no" id="business-no" />
                <Label htmlFor="business-no" className="text-white cursor-pointer flex-1">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="only" id="business-only" />
                <Label htmlFor="business-only" className="text-white cursor-pointer flex-1">
                  Only specific types
                </Label>
              </div>
            </RadioGroup>
            {formData.businessInterest === "only" && (
              <div className="space-y-2">
                <Label htmlFor="business-details" className="text-white">
                  Please specify:
                </Label>
                <Input
                  id="business-details"
                  value={formData.businessDetails}
                  onChange={(e) => setFormData((prev) => ({ ...prev, businessDetails: e.target.value }))}
                  placeholder="e.g., tech startups, food franchises..."
                  className="bg-gray-900/50 border-gray-600/50 text-white backdrop-blur-sm focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
            )}
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">Are you open to real estate?</h2>
              <p className="text-gray-400">Real estate investment opportunities</p>
            </div>
            <RadioGroup
              value={formData.realEstateInterest}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, realEstateInterest: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="yes" id="realestate-yes" />
                <Label htmlFor="realestate-yes" className="text-white cursor-pointer flex-1">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="no" id="realestate-no" />
                <Label htmlFor="realestate-no" className="text-white cursor-pointer flex-1">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="only" id="realestate-only" />
                <Label htmlFor="realestate-only" className="text-white cursor-pointer flex-1">
                  Only specific types
                </Label>
              </div>
            </RadioGroup>
            {formData.realEstateInterest === "only" && (
              <div className="space-y-2">
                <Label htmlFor="realestate-type" className="text-white">
                  What type of real estate?
                </Label>
                <Select
                  value={formData.realEstateType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, realEstateType: value }))}
                >
                  <SelectTrigger className="bg-gray-900/50 border-gray-600/50 text-white backdrop-blur-sm focus:border-purple-400 focus:ring-purple-400/20">
                    <SelectValue placeholder="Select real estate type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Properties</SelectItem>
                    <SelectItem value="commercial">Commercial Properties</SelectItem>
                    <SelectItem value="land">Land Development</SelectItem>
                    <SelectItem value="reit">REITs</SelectItem>
                    <SelectItem value="rental">Rental Properties</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        )

      case 9:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">What is your experience level in investing?</h2>
              <p className="text-gray-400">This helps us customize your experience</p>
            </div>
            <RadioGroup
              value={formData.experienceLevel}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, experienceLevel: value }))}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="beginner" id="exp-beginner" />
                <Label htmlFor="exp-beginner" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">Not much ({"<"}1 year)</div>
                    <div className="text-sm text-gray-400">I'm just getting started</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="intermediate" id="exp-intermediate" />
                <Label htmlFor="exp-intermediate" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">An ok amount (1-3 years)</div>
                    <div className="text-sm text-gray-400">I have some experience</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="advanced" id="exp-advanced" />
                <Label htmlFor="exp-advanced" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">A good amount (3-5 years)</div>
                    <div className="text-sm text-gray-400">I'm quite experienced</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-700/40 hover:border-purple-400 hover:bg-purple-500/5 transition-all duration-200 backdrop-blur-sm">
                <RadioGroupItem value="expert" id="exp-expert" />
                <Label htmlFor="exp-expert" className="text-white cursor-pointer flex-1">
                  <div>
                    <div className="font-medium">Very experienced (5-10+ years)</div>
                    <div className="text-sm text-gray-400">I'm an experienced investor</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-black to-black relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-400/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/5 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Investment Profile Setup</h1>
            <p className="text-gray-400">Help us create your personalized investment strategy</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm text-gray-400">{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-900/50 border border-gray-700/30">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ease-out rounded-full shadow-lg shadow-purple-400/20"
                style={{ width: `${progress}%` }}
              />
            </Progress>
          </div>

          {/* Form Card */}
          <Card className="max-w-2xl mx-auto bg-gray-900/30 border-gray-600/30 backdrop-blur-md shadow-2xl shadow-purple-500/10">
            <CardContent className="p-8">{renderStep()}</CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center max-w-2xl mx-auto mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="bg-gray-900/50 border-gray-600/50 text-white hover:bg-gray-800/50 hover:border-purple-400/50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep === totalSteps - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white shadow-lg shadow-purple-400/25 hover:shadow-purple-400/40 transition-all duration-200"
              >
                Complete Setup
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white shadow-lg shadow-purple-400/25 hover:shadow-purple-400/40 transition-all duration-200"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
