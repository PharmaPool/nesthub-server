const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lagos_property_listing_schema = new Schema({
  ref_no: { type: String },
  first_name: {
    type: String,
    required: [true, "field should not be empty"],
  },
  last_name: {
    type: String,
    required: [true, "field should not be empty"],
  },
  email: {
    type: String,
    required: [true, "field should not be empty"],
  },
  phone: {
    type: String,
    required: [true, "field should not be empty"],
  },
  whatsapp_phone: {
    type: String,
    required: [true, "field should not be empty"],
  },
  gender: {
    type: String,
    required: [true, "field should not be empty"],
  },
  location: {
    type: String,
    required: [true, "field should not be empty"],
  },
  area: {
    type: String,
    required: [true, "field should not be empty"],
  },
  house_type: {
    type: String,
    required: [true, "field should not be empty"],
  },
  light_situation: {
    type: String,
    required: [true, "field should not be empty"],
  },
  meter_situation: {
    type: String,
    required: [true, "field should not be empty"],
  },
  water_situation: {
    type: String,
    required: [true, "field should not be empty"],
  },
  house_age: {
    type: String,
    required: [true, "field should not be empty"],
  },
  home_size: {
    type: String,
    required: [true, "field should not be empty"],
  },
  rent: {
    type: String,
    required: [true, "field should not be empty"],
  },
  expiry_month: {
    type: String,
    required: [true, "field shoud not be empty"],
  },
  intent_to_leave: {
    type: String,
    required: [true, "field should not be empty"],
  },
  accessibility: {
    type: String,
    required: [true, "field should not be empty"],
  },
  parking: {
    type: String,
    required: [true, "field should not be empty"],
  },
  security: {
    type: String,
    required: [true, "field should not be empty"],
  },
  building: {
    type: String,
    required: [true, "field should not be empty"],
  },
  compound: {
    type: String,
    required: [true, "field should not be empty"],
  },
  landlord_wahala: {
    type: String,
    required: [true, "field should not be empty"],
  },
  main_road_access: {
    type: String,
    required: [true, "field should not be empty"],
  },
  internet: {
    type: String,
    required: [true, "field should not be empty"],
  },
  repair: {
    type: String,
    required: [true, "field should not be empty"],
  },
  neighborhood_situation: {
    type: String,
    required: [true, "field should not be empty"],
  },
  noise_situation: {
    type: String,
    required: [true, "field should not be empty"],
  },
  kitchen_size: {
    type: String,
    required: [true, "field should not be empty"],
  },
  bathroom_size: {
    type: String,
    required: [true, "field should not be empty"],
  },
  balcony: {
    type: String,
    required: [true, "field should not be empty"],
  },
  flooding: {
    type: String,
    required: [true, "field should not be empty"],
  },
  shared: {
    type: String,
    required: [true, "field should not be empty"],
  },
  nearest_bus_stop: {
    type: String,
    required: [true, "field should not be empty"],
  },
  comments: {
    type: String,
    required: [true, "field should not be empty"],
  },
  images: [{ type: String, default: "" }],
});

module.exports = mongoose.model("Lagos", lagos_property_listing_schema);
