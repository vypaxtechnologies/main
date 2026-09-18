import mongoose from 'mongoose';

const newsletterSubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
      unique: true,
    },
    status: {
      type: String,
      enum: ['subscribed', 'unsubscribed'],
      default: 'subscribed',
    },
  },
  { timestamps: true }
);

export default mongoose.model('NewsletterSubscription', newsletterSubscriptionSchema);

