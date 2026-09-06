import heroGifts from "@/assets/hero-gifts.jpg";
import executiveHamper from "@/assets/executive-hamper.jpg";
import realEstateGift from "@/assets/real-estate-gift.jpg";
import brandedApparel from "@/assets/branded-apparel.jpg";
import industryCorporate from "@/assets/industry-corporate.jpg";
import industryDealership from "@/assets/industry-dealership.jpg";
import industryOffice from "@/assets/industry-office.jpg";
import industryRealEstate from "@/assets/industry-real-estate.jpg";
import industryApparel from "@/assets/industry-apparel.jpg";

export type GalleryItem = {
  id: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  /** Optional short motion asset (mp4/webm) shown instead of the still image. */
  video?: string;
  /** CSS object-position focal point, e.g. "50% 30%". */
  focal?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "welcome-set",
    image: heroGifts,
    title: "Classic Welcome Set",
    category: "Curated Gifting",
    description: "Notebook, pen and mug presented in a ribboned keepsake box.",
    focal: "50% 45%",
  },
  {
    id: "executive-hamper",
    image: executiveHamper,
    title: "Executive Hamper",
    category: "Premium Packaging",
    description: "Cooler bag, wine and accessories for high-value clients.",
  },
  {
    id: "handover",
    image: realEstateGift,
    title: "Handover Moment",
    category: "Real Estate",
    description: "Keys, champagne and a welcome set that lands the memory.",
  },
  {
    id: "apparel",
    image: brandedApparel,
    title: "Branded Apparel",
    category: "Brand Identity",
    description: "Golf shirts, caps and jackets finished in your colours.",
  },
  {
    id: "corporate",
    image: industryCorporate,
    title: "Corporate Essentials",
    category: "Everyday Brand",
    description: "Diaries, notebooks and drinkware, beautifully branded.",
  },
  {
    id: "dealership",
    image: industryDealership,
    title: "Dealership Handovers",
    category: "Automotive",
    description: "Premium presentation for the moment the keys change hands.",
  },
  {
    id: "office-launch",
    image: industryOffice,
    title: "Office Launch Kits",
    category: "Milestones",
    description: "Celebrate new spaces with considered detail.",
  },
  {
    id: "event-wear",
    image: industryApparel,
    title: "Event Wear",
    category: "Activations",
    description: "Cohesive team looks for launches and conferences.",
  },
  {
    id: "estate-welcome",
    image: industryRealEstate,
    title: "Estate Welcome",
    category: "Real Estate",
    description: "Warm arrivals for new homeowners and tenants.",
  },
];
