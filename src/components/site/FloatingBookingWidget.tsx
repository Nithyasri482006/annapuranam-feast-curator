import { useState, useEffect } from "react";
import { Utensils, X, CheckCircle2, Loader2, Calendar } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import feastImage from "@/assets/feast.png";

const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Birthday",
  "Engagement",
  "Housewarming",
  "Corporate Event",
  "Other"
];

const CATERING_TYPES = [
  "Traditional South Indian",
  "Wedding Feast",
  "Premium Buffet",
  "Custom Menu"
];

export function FloatingBookingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Persisted state across open/closes
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    cateringType: "",
    location: "",
    requirements: ""
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    
    if (!formData.date) newErrors.date = "Date is required";
    else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) newErrors.date = "Date cannot be in the past";
    }
    
    if (!formData.guests) newErrors.guests = "Number of guests is required";
    else if (isNaN(Number(formData.guests)) || Number(formData.guests) <= 0) newErrors.guests = "Must be a valid number";
    
    if (!formData.cateringType) newErrors.cateringType = "Please select catering type";
    
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setFormData({
      name: "", phone: "", email: "", eventType: "", date: "", guests: "", cateringType: "", location: "", requirements: ""
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    // If it was success, reset to normal form state when closed
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 300);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <>
      {/* Floating Action Container */}
      <div 
        className={cn(
          "fixed bottom-6 right-6 z-[40] flex flex-col items-end gap-4 transition-all duration-500 ease-out",
          isOpen ? "opacity-0 translate-y-10 scale-90 pointer-events-none" : "opacity-100 translate-y-0 scale-100"
        )}
      >
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 sm:p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* Floating Card Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="group flex flex-col items-center justify-center transition-all duration-500 ease-out hover:-translate-y-2"
          style={{
            animation: !isOpen ? 'float 6s ease-in-out infinite' : 'none'
          }}
          aria-label="Open Booking Portal"
        >
        {/* CSS Animation for floating */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>

        {/* Image-based Widget Wrapper */}
        <div className="relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] w-[200px] sm:w-[260px] rounded-2xl">
          <img 
            src={feastImage} 
            alt="Register for Catering" 
            className="w-full h-auto object-contain block"
            onError={(e) => {
              // Fallback if image is not uploaded yet
              e.currentTarget.src = "https://images.unsplash.com/photo-1626804475297-41609ea0d4eb?auto=format&fit=crop&q=80&w=400&h=300";
            }}
          />
          {/* Subtle gold shimmer on hover over the image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.8),transparent)] bg-[length:200%_100%] animate-[shimmer_2s_infinite] pointer-events-none"></div>
        </div>
      </button>
      </div>

      {/* Booking Portal Modal */}
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-[#fdfaf3] border-gold/30 shadow-2xl max-h-[90vh] flex flex-col sm:rounded-2xl w-[95vw]">
          
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-[#143a23] to-[#2a5a3b] px-6 py-8 text-center relative shrink-0">
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }}></div>
            
            {/* Close button that looks better on the dark header */}
            <button 
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-full p-1.5 bg-black/20 text-white/80 hover:bg-black/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-display text-3xl sm:text-4xl text-gold relative z-10 drop-shadow-md">Register Your Virundhu!</h2>
            <p className="text-white/90 text-sm mt-2 relative z-10 font-light max-w-md mx-auto">
              Tell us about your celebration and register for a feast to remember.
            </p>
          </div>

          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-10 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-display text-3xl text-primary mb-3">Your Virundhu Journey Has Begun! 🌿</h3>
                <p className="text-muted-foreground max-w-md mb-8">
                  Thank you for choosing us. Our catering team will review your details and contact you shortly with a customized proposal.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-primary/90 shadow-md"
                >
                  Back to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Full Name <span className="text-red-500">*</span></label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                        errors.name ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                        errors.phone ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Email Address <span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                        errors.email ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>

                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Event Type <span className="text-red-500">*</span></label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold appearance-none",
                        errors.eventType ? "border-red-500" : "border-border",
                        !formData.eventType && "text-muted-foreground"
                      )}
                    >
                      <option value="" disabled>Select event type</option>
                      {EVENT_TYPES.map(type => <option key={type} value={type} className="text-foreground">{type}</option>)}
                    </select>
                    {errors.eventType && <p className="text-red-500 text-xs">{errors.eventType}</p>}
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Event Date <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={cn(
                          "w-full rounded-md border bg-white pl-3 pr-10 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                          errors.date ? "border-red-500" : "border-border",
                          !formData.date && "text-muted-foreground"
                        )}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Number of Guests <span className="text-red-500">*</span></label>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="e.g. 200"
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                        errors.guests ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.guests && <p className="text-red-500 text-xs">{errors.guests}</p>}
                  </div>

                  {/* Catering Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Catering Type <span className="text-red-500">*</span></label>
                    <select
                      name="cateringType"
                      value={formData.cateringType}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold appearance-none",
                        errors.cateringType ? "border-red-500" : "border-border",
                        !formData.cateringType && "text-muted-foreground"
                      )}
                    >
                      <option value="" disabled>Select catering type</option>
                      {CATERING_TYPES.map(type => <option key={type} value={type} className="text-foreground">{type}</option>)}
                    </select>
                    {errors.cateringType && <p className="text-red-500 text-xs">{errors.cateringType}</p>}
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Event Location <span className="text-red-500">*</span></label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City or Venue area"
                      className={cn(
                        "w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold",
                        errors.location ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.location && <p className="text-red-500 text-xs">{errors.location}</p>}
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Additional Requirements / Message</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Tell us about any specific dietary requirements, themes, or special requests..."
                    rows={3}
                    className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-gold resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-[#d4af37] hover:from-[#d4af37] hover:to-gold text-primary font-semibold py-3.5 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>REGISTER NOW</span>
                        <span className="text-lg leading-none">→</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    By submitting this form, you agree to be contacted regarding your catering inquiry.
                  </p>
                </div>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
