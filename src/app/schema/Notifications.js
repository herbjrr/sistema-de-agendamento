import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  {
    timestamps: true,
  })

  // mongoose recebe dois parametros: notification e notifications.schema
  export default mongoose.model('Notifications', NotificationSchema)