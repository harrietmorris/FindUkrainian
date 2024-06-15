export interface ICategoryType {
    name: {
      en: string;
      uk: string;
    };
    description: {
      en: string;
      uk: string;
    };
  }

 export interface IBusinessType {
    _id: string;
    name: string;
    address: string;
    category: string;
    description: string;
    longDescription: string;
    website: string;
    openingHours: {
      [key: string]: OpenCloseHours;
    };
    contactInfo: string;
    coordinates: { lat: number; lng: number };
    images: [string];
  }
  
  interface OpenCloseHours {
    [key: string]: number;
  }
  