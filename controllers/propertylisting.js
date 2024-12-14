const Abuja = require("../models/abujapropertylisting");
const Lagos = require("../models/lagospropertylisting");
const No_Location = require("../models/nolocationpropertylisting");
const error = require("../utils/error_handler");
const { uploadImage } = require("../utils/images");
const { generateId } = require("../utils/otp");

/*****************
 * Abuja Listing *
 *****************/
module.exports.abuja_listing = async (req, res, next) => {
  const first_name = req.body.first_name,
    last_name = req.body.last_name,
    email = req.body.email,
    phone = req.body.phone,
    whatsapp_phone = req.body.whatsapp_phone,
    gender = req.body.gender,
    location = req.body.location,
    area = req.body.area,
    house_type = req.body.house_type,
    light_situation = req.body.light_situation,
    meter_situation = req.body.meter_situation,
    water_situation = req.body.water_situation,
    house_age = req.body.house_age,
    home_size = req.body.home_size,
    rent = req.body.rent,
    expiry_month = req.body.expiry_month,
    intent_to_leave = req.body.intent_to_leave,
    accessibility = req.body.accessibility,
    parking = req.body.parking,
    security = req.body.security,
    building = req.body.building,
    compound = req.body.compound,
    landlord_wahala = req.body.landlord_wahala,
    main_road_access = req.body.main_road_access,
    internet = req.body.internet,
    repair = req.body.repair,
    neighborhood_situation = req.body.neighborhood_situation,
    noise_situation = req.body.noise_situation,
    kitchen_size = req.body.kitchen_size,
    bathroom_size = req.body.bathroom_size,
    balcony = req.body.balcony,
    flooding = req.body.flooding,
    shared = req.body.shared,
    nearest_bus_stop = req.body.nearest_bus_stop,
    comments = req.body.comments,
    ref_no = generateId(),
    images = req.files;

  try {
    const listing = new Abuja({
      ref_no,
      first_name,
      last_name,
      email,
      phone,
      whatsapp_phone,
      gender,
      location,
      area,
      house_age,
      house_type,
      light_situation,
      meter_situation,
      water_situation,
      home_size,
      rent,
      expiry_month,
      intent_to_leave,
      accessibility,
      parking,
      security,
      building,
      compound,
      landlord_wahala,
      internet,
      main_road_access,
      repair,
      neighborhood_situation,
      noise_situation,
      kitchen_size,
      bathroom_size,
      balcony,
      flooding,
      shared,
      nearest_bus_stop,
      comments,
    });

    for (const image of images) {
      const uploadeded_image = await uploadImage(res, image.path);
      await listing.images.push(uploadeded_image.imageUrl);
    }

    const complete_listing = await listing.save();

    res.status(200).json({ success: true, complete_listing });
  } catch (err) {
    error.error(err, next);
  }
};

/*****************
 * Lagos Listing *
 *****************/
module.exports.lagos_listing = async (req, res, next) => {
  const first_name = req.body.first_name,
    last_name = req.body.last_name,
    email = req.body.email,
    phone = req.body.phone,
    whatsapp_phone = req.body.whatsapp_phone,
    gender = req.body.gender,
    location = req.body.location,
    area = req.body.area,
    house_type = req.body.house_type,
    light_situation = req.body.light_situation,
    meter_situation = req.body.meter_situation,
    water_situation = req.body.water_situation,
    house_age = req.body.house_age,
    home_size = req.body.home_size,
    rent = req.body.rent,
    expiry_month = req.body.expiry_month,
    intent_to_leave = req.body.intent_to_leave,
    accessibility = req.body.accessibility,
    parking = req.body.parking,
    security = req.body.security,
    building = req.body.building,
    compound = req.body.compound,
    landlord_wahala = req.body.landlord_wahala,
    main_road_access = req.body.main_road_access,
    internet = req.body.internet,
    repair = req.body.repair,
    neighborhood_situation = req.body.neighborhood_situation,
    noise_situation = req.body.noise_situation,
    kitchen_size = req.body.kitchen_size,
    bathroom_size = req.body.bathroom_size,
    balcony = req.body.balcony,
    flooding = req.body.flooding,
    shared = req.body.shared,
    nearest_bus_stop = req.body.nearest_bus_stop,
    comments = req.body.comments,
    ref_no = generateId(),
    images = req.files;

  try {
    const listing = new Lagos({
      ref_no,
      first_name,
      last_name,
      email,
      phone,
      whatsapp_phone,
      gender,
      location,
      area,
      house_age,
      house_type,
      light_situation,
      meter_situation,
      water_situation,
      home_size,
      rent,
      expiry_month,
      intent_to_leave,
      accessibility,
      parking,
      security,
      building,
      compound,
      landlord_wahala,
      internet,
      main_road_access,
      repair,
      neighborhood_situation,
      noise_situation,
      kitchen_size,
      bathroom_size,
      balcony,
      flooding,
      shared,
      nearest_bus_stop,
      comments,
    });

    for (const image of images) {
      const uploadeded_image = await uploadImage(res, image.path);
      await listing.images.push(uploadeded_image.imageUrl);
    }

    const complete_listing = await listing.save();

    res.status(200).json({ success: true, complete_listing });
  } catch (err) {
    error.error(err, next);
  }
};

/***********************
 * No Location Listing *
 ***********************/
module.exports.location_listing = async (req, res, next) => {
  const first_name = req.body.first_name,
    last_name = req.body.last_name,
    email = req.body.email,
    phone = req.body.phone,
    whatsapp_phone = req.body.whatsapp_phone,
    gender = req.body.gender,
    location = req.body.location,
    area = req.body.area,
    house_type = req.body.house_type,
    light_situation = req.body.light_situation,
    meter_situation = req.body.meter_situation,
    water_situation = req.body.water_situation,
    house_age = req.body.house_age,
    home_size = req.body.home_size,
    rent = req.body.rent,
    expiry_month = req.body.expiry_month,
    intent_to_leave = req.body.intent_to_leave,
    accessibility = req.body.accessibility,
    parking = req.body.parking,
    security = req.body.security,
    building = req.body.building,
    compound = req.body.compound,
    landlord_wahala = req.body.landlord_wahala,
    main_road_access = req.body.main_road_access,
    internet = req.body.internet,
    repair = req.body.repair,
    neighborhood_situation = req.body.neighborhood_situation,
    noise_situation = req.body.noise_situation,
    kitchen_size = req.body.kitchen_size,
    bathroom_size = req.body.bathroom_size,
    balcony = req.body.balcony,
    flooding = req.body.flooding,
    shared = req.body.shared,
    nearest_bus_stop = req.body.nearest_bus_stop,
    comments = req.body.comments,
    ref_no = generateId(),
    images = req.files;

  try {
    const listing = new No_Location({
      ref_no,
      first_name,
      last_name,
      email,
      phone,
      whatsapp_phone,
      gender,
      location,
      area,
      house_age,
      house_type,
      light_situation,
      meter_situation,
      water_situation,
      home_size,
      rent,
      expiry_month,
      intent_to_leave,
      accessibility,
      parking,
      security,
      building,
      compound,
      landlord_wahala,
      internet,
      main_road_access,
      repair,
      neighborhood_situation,
      noise_situation,
      kitchen_size,
      bathroom_size,
      balcony,
      flooding,
      shared,
      nearest_bus_stop,
      comments,
    });

    for (const image of images) {
      const uploadeded_image = await uploadImage(res, image.path);
      await listing.images.push(uploadeded_image.imageUrl);
    }

    const complete_listing = await listing.save();

    res.status(200).json({ success: true, complete_listing });
  } catch (err) {
    error.error(err, next);
  }
};

module.exports.get_listing = async (req, res, next) => {
  const location = req.params.location.toLowerCase();

  try {
    let listing;

    if (location === "abuja") listing = await Abuja.find();
    else if (location === "lagos") listing = await Lagos.find();
    else listing = await No_Location.find();

    res.status(200).json({ success: true, location, listing });
  } catch (err) {
    error.error(err, next);
  }
};
