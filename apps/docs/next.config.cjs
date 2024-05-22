/** @type {import('next').NextConfig} */
const nextConfig = {};

// import {withContentlayer} from "next-contentlayer"

const withContentlayer = require("next-contentlayer").withContentlayer;

 
module.exports = withContentlayer(nextConfig);