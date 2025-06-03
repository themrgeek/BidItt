// models/Property.js
const propertySchema = new mongoose.Schema({
  title: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startingBid: Number,
  reservePrice: Number, // Minimum price to sell
  currentBid: Number,
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
  auctionEnd: Date,    // Deadline tracker
  province: String,    // Multi-region filter (e.g., "ON", "BC")
  documents: [String]  // Array of file URLs
});