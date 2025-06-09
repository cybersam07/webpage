"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Video, MapPin, CheckCircle } from "lucide-react";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export function BookingSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const serviceTypes = [
    "Claims Investigation",
    "Background Investigation",
    "Asset Identification",
    "Missing Persons",
    "Surveillance",
    "Criminal/Civil Investigation",
    "Process Serving",
    "Corporate Investigation",
    "Infidelity Investigation",
    "General Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.phone &&
                      formData.serviceType && formData.consultationType &&
                      formData.preferredDate && formData.preferredTime;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    const mailto = `mailto:info@spycyberinvestigation.com?subject=Consultation Request from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Consultation Type: ${formData.consultationType}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Case Details: ${formData.message}`
    )}`;

    window.location.href = mailto;

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        consultationType: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Book Consultation
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for scheduling a consultation. Please check your email app to complete the process.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          Book Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Schedule Your Free Consultation
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(XXX) XXX-XXXX"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Service Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Service Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of investigation needed" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Case Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please provide a brief description of your case or investigation needs..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Consultation Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Consultation Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="consultationType">Consultation Type *</Label>
                <Select value={formData.consultationType} onValueChange={(value) => handleInputChange("consultationType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How would you prefer to meet?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Call</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="video">
                      <div className="flex items-center space-x-2">
                        <Video className="h-4 w-4" />
                        <span>Video Call</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="inperson">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>In-Person Meeting</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">What to Expect</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free 30-minute consultation</li>
                    <li>• Case evaluation and strategy discussion</li>
                    <li>• Confidential and secure conversation</li>
                    <li>• No obligation to proceed</li>
                    <li>• We'll contact you within 24 hours to confirm</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={!isFormValid}
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
