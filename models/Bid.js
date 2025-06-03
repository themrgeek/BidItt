// models/Bid.js
const bidSchema = new mongoose.Schema({
  property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  timestamp: { type: Date, default: Date.now }
});