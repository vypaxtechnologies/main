import mongoose from 'mongoose';

const trainingEnquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    background: { type: String, trim: true, maxlength: 160 },
    course: { type: String, required: true, trim: true, maxlength: 160 },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    status: { type: String, enum: ['new', 'contacted', 'enrolled', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.model('TrainingEnquiry', trainingEnquirySchema);

