/*import data_product from "./data";*/
import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";


let all_product = [
	{
		id:1,
		name:"Roses",
		category:"Plants",
		image:p1_img,
		new_price:50.0,
		old_price:70.0,

	},
	{
		id:2,
		name:"Sunflower Plant",
		category:"Plants",
		image:p2_img,
		new_price:70.0,
		old_price:100.0,
	},
	{
		id:3,
		name:"Jade Plant",
		category:"Plants",
		image:p3_img,
		new_price:250.0,
		old_price:270.0,
	},
	{
		id:4,
		name:"Tulsi Plant",
		category:"Plants",
		image:p4_img,
		new_price:50.0,
		old_price:70.0,
	},
	{
		id:5,
		name:"Syngonium Plant In Blue Handgrip Box",
		category:"Plants",
		image:p5_img,
		new_price:599.0,
		old_price:600.0,
	},
	{
		id:6,
		name:"3 Layer Lucky Bamboo Plant",
		category:"Plants",
		image:p6_img,
		new_price:200,
		old_price:300,
	},
	{
		id:7,
		name:"Grand 5 green House Set of Plants",
		category:"Plants",
		image:p7_img,
		new_price:550.0,
		old_price:600.0,
	},
	{
		id:8,
		name:"Set Of 3 Green Plants	in Cute Pots",
		category:"Plants",
		image:p8_img,
		new_price:550.0,
		old_price:640.0,
	},
	{
		id:9,
		name:"Jade Plant in Red Pot",
		category:"Plants",
		image:p9_img,
		new_price:550.0,
		old_price:560.0,
	},
	{
		id:10,
		name:"Jade Plant in Red Pot",
		category:"Plants",
		image:p10_img,
		new_price:550.0,
		old_price:690.0,
	},

	{
		id:11,
		name:"Vermicompost - 1 kg (Set of 2)",
		category:"soils",
		image:p11_img,
		new_price:160.0,
		old_price:200.0,

	},
	{
		id:12,
		name:"Coco Peat Block - 4 kg)",
		category:"soils",
		image:p12_img,
		new_price:211.0,
		old_price:400.0,

	},
	{
		id:13,
		name:"Jeevamrut (Plant Growth Tonic)",
		category:"soils",
		image:p13_img,
		new_price:199.0,
		old_price:284.0,

	},
	{
		id:14,
		name:"Nutrient-rich potting soil mix",
		category:"soils",
		image:p14_img,
		new_price:329.0,
		old_price:429.0,

	},
	{
		id:15,
		name:"Perlite - 500g",
		category:"soils",
		image:p15_img,
		new_price:146.0,
		old_price:189.0,

	},
	{
		id:16,
		name:"GUARD 360 (Plant Protector Spray)",
		category:"soils",
		image:p16_img,
		new_price:390.0,
		old_price:400.0,

	},
	{
		id:17,
		name:"GROW ME FAST(Flowering Plant Growth Booster Spray)",
		category:"soils",
		image:p17_img,
		new_price:390.0,
		old_price:400.0,

	},
	{
		id:18,
		name:"Pumice Stones - 1 kg)",
		category:"soils",
		image:p18_img,
		new_price:479.0,
		old_price:549.0,

	},
	{
		id:19,
		name:"Coco Husk Block - 4.5 kg",
		category:"soils",
		image:p19_img,
		new_price:160.0,
		old_price:200.0,

	},
	{
		id:20,
		name:"Sea Secret (Sea Weed Extract Granules, 500 g)",
		category:"soils",
		image:p20_img,
		new_price:216.0,
		old_price:240.0,

	},

	{
		id:21,
		name:"Beautiful Spring Designable Garden",
		category:"gardens",
		image:p21_img,
		new_price:1550.0,
		old_price:1770.0,
	},
	{
		id:22,
		name:"compound-or-lounge-Garden",
		category:"gardens",
		image:p22_img,
		new_price:2270.0,
		old_price:2900.0,
	},
	{
		id:23,
		name:"Balcony garden",
		category:"gardens",
		image:p23_img,
		new_price:2500.0,
		old_price:2700.0,
	},
	{
		id:24,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p24_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:25,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p25_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:26,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p26_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:27,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p27_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:28,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p28_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:29,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p29_img,
		new_price:5000.0,
		old_price:7000.0,
	},
	{
		id:30,
		name:"Beautiful corner-terrace garden",
		category:"gardens",
		image:p30_img,
		new_price:5000.0,
		old_price:7000.0,
	},

];
export default all_product;