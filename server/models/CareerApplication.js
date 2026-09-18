import mongoose from 'mongoose';

const careerApplicationSchema = new mongoose.Schema(
  {
    role: { type: String, required: true, trim: true, maxlength: 160 },
    fullName: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    location: { type: String, required: true, trim: true, maxlength: 120 },
    linkedin: { type: String, required: true, trim: true, maxlength: 300 },
    portfolio: { type: String, required: true, trim: true, maxlength: 300 },
    experience: { type: String, required: true, trim: true, maxlength: 20 },
    experienceYears: { type: String, trim: true, maxlength: 20 },
    companyName: { type: String, trim: true, maxlength: 160 },
    companyRole: { type: String, trim: true, maxlength: 160 },
    resumeName: { type: String, required: true, trim: true, maxlength: 200 },
    resumeData: { type: Buffer, required: true },
    resumeMimeType: { type: String, required: true, trim: true, maxlength: 120 },
    status: { type: String, enum: ['new', 'reviewing', 'closed'], default: 'new' },
  },
  { timestamps: true },
);

export default mongoose.model('CareerApplication', careerApplicationSchema);
