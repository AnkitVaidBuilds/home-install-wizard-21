import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import professionalTeamImage from '@/assets/professional-team.jpg';

export const CustomerDetailsStep = ({ leadData, updateLeadData }) => {
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d\s\-\(\)\+]{10,}$/.test(phone.replace(/\D/g, ''));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">
      {/* Panel 1: Customer Form */}
      <div className="md:col-span-1 space-y-6 animate-slide-in-left min-h-full">
        <div>
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            Contact Information
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            We'll use this information to provide your free estimate and schedule installation.
          </p>
          
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={leadData.fullName || ''}
                onChange={(e) => updateLeadData({ fullName: e.target.value })}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label className="text-base font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={leadData.email || ''}
                onChange={(e) => updateLeadData({ email: e.target.value })}
                className={`mt-2 ${leadData.email && !validateEmail(leadData.email) ? 'border-destructive' : ''}`}
                required
              />
              {leadData.email && !validateEmail(leadData.email) && (
                <p className="text-xs text-destructive mt-1">Please enter a valid email address</p>
              )}
            </div>

            <div>
              <Label className="text-base font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                value={leadData.phone || ''}
                onChange={(e) => updateLeadData({ phone: e.target.value })}
                className={`mt-2 ${leadData.phone && !validatePhone(leadData.phone) ? 'border-destructive' : ''}`}
                required
              />
              {leadData.phone && !validatePhone(leadData.phone) && (
                <p className="text-xs text-destructive mt-1">Please enter a valid phone number</p>
              )}
            </div>

            <div>
              <Label className="text-base font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Project Address *
              </Label>
              <Textarea
                placeholder="Enter street address, city, state, and ZIP code"
                value={leadData.address || ''}
                onChange={(e) => updateLeadData({ address: e.target.value })}
                className="mt-2 min-h-[80px]"
                required
              />
            </div>

            <div>
              <Label className="text-base font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Timeline *
              </Label>
              <RadioGroup 
                value={leadData.startTime || ''} 
                onValueChange={(value) => updateLeadData({ startTime: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="within-1-month" id="asap" />
                  <Label htmlFor="asap" className="text-sm">Within 1 month (ASAP)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-3-months" id="soon" />
                  <Label htmlFor="soon" className="text-sm">1-3 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-plus-months" id="flexible" />
                  <Label htmlFor="flexible" className="text-sm">3+ months (flexible)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2: Professional Team Image */}
      <div className="md:col-span-1 animate-fade-in min-h-full">
        <Card className="h-full overflow-hidden shadow-medium">
          <img 
            src={professionalTeamImage}
            alt="Professional installation team"
            className="w-full h-full object-cover"
          />
        </Card>
      </div>

      {/* Panel 3: Thank You & Next Steps */}
      <div className="md:col-span-1 animate-slide-in-right min-h-full">
        <Card className="h-full p-6 bg-gradient-warm border-0 shadow-soft text-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-white" />
              <h3 className="text-xl font-semibold">
                Almost Done!
              </h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">What happens next?</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-white flex-shrink-0 mt-0.5" />
                    <span>We'll call you within 2 hours to confirm details</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-white flex-shrink-0 mt-0.5" />
                    <span>Schedule your free on-site consultation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-white flex-shrink-0 mt-0.5" />
                    <span>Receive detailed written estimate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-white flex-shrink-0 mt-0.5" />
                    <span>Professional installation by certified team</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Our Commitment to You:</h4>
                <div className="space-y-1 text-xs">
                  <p>✓ No high-pressure sales tactics</p>
                  <p>✓ Transparent, upfront pricing</p>
                  <p>✓ Licensed & insured professionals</p>
                  <p>✓ 5-year installation warranty</p>
                  <p>✓ Clean-up included in every job</p>
                </div>
              </div>

              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-xs text-center">
                  <span className="font-medium">Free Estimate Guarantee</span><br />
                  No cost, no obligation. We respect your time and budget.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};