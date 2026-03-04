import { useState } from "react";

interface FormData {
  fullName: string;
  standard: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
}

const initialForm: FormData = { fullName: "", standard: "", parentName: "", phone: "", email: "", address: "" };

const Register = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.standard) e.standard = "Please select a standard";
    if (!form.parentName.trim()) e.parentName = "Parent name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.address.trim()) e.address = "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors[field] ? "border-destructive" : "border-border"}`;

  return (
    <div>
      <section className="hero-gradient px-4 py-20 text-center text-primary-foreground">
        <h1 className="font-heading text-4xl font-extrabold md:text-5xl">Register Now</h1>
        <p className="mt-3 text-primary-foreground/70">Enroll your child for a brighter future</p>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 card-shadow md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <i className="fas fa-check text-3xl"></i>
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Registration Successful!</h2>
              <p className="mt-2 text-muted-foreground">We will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:scale-105">
                Register Another Student
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                <input className={inputClass("fullName")} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Enter student's full name" />
                {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Student Standard</label>
                <select className={inputClass("standard")} value={form.standard} onChange={(e) => setForm({ ...form, standard: e.target.value })}>
                  <option value="">Select Standard</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={`${i + 1}`}>{i + 1}th Standard</option>
                  ))}
                </select>
                {errors.standard && <p className="mt-1 text-xs text-destructive">{errors.standard}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Parent Name</label>
                <input className={inputClass("parentName")} value={form.parentName} onChange={(e) => setForm({ ...form, parentName: e.target.value })} placeholder="Enter parent's name" />
                {errors.parentName && <p className="mt-1 text-xs text-destructive">{errors.parentName}</p>}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                  <input className={inputClass("phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit phone number" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input className={inputClass("email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Address</label>
                <textarea className={`${inputClass("address")} min-h-[100px] resize-none`} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Enter full address"></textarea>
                {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address}</p>}
              </div>
              <button type="submit" className="w-full rounded-xl bg-primary py-3.5 font-heading font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg">
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Register;
