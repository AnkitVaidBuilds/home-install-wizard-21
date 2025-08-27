import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Home, Hammer, CheckCircle, Shield, Award } from 'lucide-react';
import { LowesHeader } from './LowesHeader';
import { EnhancedCategoryStep } from './steps/EnhancedCategoryStep';
import { EnhancedServiceDetailsStep } from './steps/EnhancedServiceDetailsStep';
import { EnhancedConfirmationStep } from './steps/EnhancedConfirmationStep';
import { EnhancedCustomerDetailsStep } from './steps/EnhancedCustomerDetailsStep';

const stepTitles = [
  'Service Selection',
  'Project Details',
  'Confirmation', 
  'Contact Information'
];

export const LeadCapture = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceSelected, setServiceSelected] = useState(false);
  const [leadData, setLeadData] = useState({
    serviceType: '',
    projectGoal: ''
  });

  const updateLeadData = (updates) => {
    setLeadData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      
      // Reset to original state when going back to step 1
      if (newStep === 1) {
        setLeadData({
          serviceType: '',
          projectGoal: ''
        });
        setServiceSelected(false);
      }
    }
  };

  const handleSearchStateChange = (isSelected) => {
    setServiceSelected(isSelected);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return leadData.serviceType && leadData.projectGoal;
      case 2:
        if (leadData.serviceType === 'flooring') {
          return leadData.flooringType && leadData.flooringArea && leadData.subfloorPrep;
        } else {
          return leadData.doorType && leadData.doorMaterial && leadData.doorQuantity;
        }
      case 3:
        return true; // Confirmation step always allows proceeding
      case 4:
        return leadData.fullName && leadData.email && leadData.phone && leadData.address && leadData.startTime;
      default:
        return false;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <EnhancedCategoryStep leadData={leadData} updateLeadData={updateLeadData} onSearchStateChange={handleSearchStateChange} />;
      case 2:
        return <EnhancedServiceDetailsStep leadData={leadData} updateLeadData={updateLeadData} />;
      case 3:
        return <EnhancedConfirmationStep leadData={leadData} updateLeadData={updateLeadData} />;
      case 4:
        return <EnhancedCustomerDetailsStep leadData={leadData} updateLeadData={updateLeadData} />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    // In a real app, this would send data to backend
    console.log('Lead submitted:', leadData);
    alert('Thank you! We will contact you soon to discuss your project.');
    
    // Reset form for demo
    setLeadData({
      serviceType: '',
      projectGoal: ''
    });
    setServiceSelected(false);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <LowesHeader />
      
      {/* Hero Section */}
      <div className="bg-gradient-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Installation Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get a personalized quote for your flooring and door installation project. 
            Licensed professionals, guaranteed quality, competitive pricing.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Bar - Only show after service selection or if not on step 1 */}
        {(serviceSelected || currentStep > 1) && (
          <div className="max-w-md mx-auto mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of 4
              </span>
              <span className="text-sm font-medium text-lowes-navy">
                {Math.round((currentStep / 4) * 100)}%
              </span>
            </div>
            <Progress 
              value={(currentStep / 4) * 100} 
              className="h-3 bg-gray-200"
            />
            <p className="text-sm text-center mt-2 font-medium text-lowes-navy">
              {stepTitles[currentStep - 1]}
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            {renderCurrentStep()}
          </div>

          {/* Navigation */}
          <Card className="shadow-large border-0">
            <div className="flex items-center p-6 bg-gray-50">
              {/* Left section - Back button or empty space */}
              <div className="flex-1 flex justify-start">
                {currentStep > 1 ? (
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Button>
                ) : null}
              </div>

              {/* Center section - Guarantee text */}
              <div className="flex-1 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Hammer className="h-4 w-4" />
                <span>Professional Installation Guaranteed</span>
              </div>

              {/* Right section - Next/Submit button */}
              <div className="flex-1 flex justify-end">
                {currentStep < 4 ? (
                  <Button 
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-lowes-navy hover:bg-lowes-blue text-white px-8"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-lowes-navy hover:bg-lowes-blue text-white px-8"
                  >
                    Get My Quote
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};