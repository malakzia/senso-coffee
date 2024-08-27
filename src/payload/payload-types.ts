/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CartItems".
 */
export type CartItems =
  | {
      product?: (string | null) | Product;
      quantity?: number | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    products: Product;
    orders: Order;
    media: Media;
    categories: Category;
    users: User;
    reviews: Review;
    'contact-us': ContactUs;
    distributors: Distributor;
    'form-submission': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedOn?: string | null;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    heading?: string | null;
    subHeading?: string | null;
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            icon?: string | Media | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    bannerOption?: ('singlePicture' | 'multiplePictures') | null;
    media?: string | Media | null;
    heroBanners?:
      | {
          media?: string | Media | null;
          id?: string | null;
        }[]
      | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                icon?: string | Media | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                icon?: string | Media | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        displayAs: 'carousel' | 'list';
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: 'products' | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'newsLetterBlock';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          icon?: string | Media | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('default' | 'primary' | 'secondary') | null;
        };
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'aboutBlock';
      }
    | {
        title?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'reviewsBlock';
      }
    | {
        imagePosition?: ('left' | 'right') | null;
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'textWithImageBlock';
      }
    | {
        backgroundColor?: ('blue' | 'white' | 'brown') | null;
        richText: {
          [k: string]: unknown;
        }[];
        title?: string | null;
        brands?:
          | {
              media: string | Media;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'ourBrandsBlock';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        contentAlignment?: ('left' | 'center' | 'right') | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'richTextBlock';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        cardsHeading?: string | null;
        cards?:
          | {
              media?: string | Media | null;
              heading?: string | null;
              content?: string | null;
              id?: string | null;
            }[]
          | null;
        processHeading?: string | null;
        processContent?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'brandProcessBlock';
      }
    | {
        richText?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'distributorsCarousel';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        brandTimeLine?:
          | {
              year: string;
              shortInformation: string;
              shortDescription: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'brandOverview';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contactformBlock';
      }
    | {
        heading?: string | null;
        subHeading?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'instaFeedBlock';
      }
  )[];
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  parent?: (string | null) | Category;
  breadcrumbs?:
    | {
        doc?: (string | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  title: string;
  shortDescription?: string | null;
  publishedOn?: string | null;
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                icon?: string | Media | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                icon?: string | Media | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        displayAs: 'carousel' | 'list';
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: 'products' | null;
        categories?: (string | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string | Product;
            }[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'productLongDescription';
      }
    | {
        title?: string | null;
        productReviews?:
          | {
              name?: string | null;
              rating?: ('1' | '2' | '3' | '4' | '5') | null;
              review?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'productReviewsBlock';
      }
  )[];
  stripeProductID?: string | null;
  productStatus?: ('inStock' | 'outOfStock') | null;
  priceJSON: string;
  productImages: {
    media?: string | Media | null;
    id?: string | null;
  }[];
  enablePaywall?: boolean | null;
  paywall?:
    | (
        | {
            invertBackground?: boolean | null;
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    icon?: string | Media | null;
                    reference?: {
                      relationTo: 'pages';
                      value: string | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    icon?: string | Media | null;
                    reference?: {
                      relationTo: 'pages';
                      value: string | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent: {
              [k: string]: unknown;
            }[];
            displayAs: 'carousel' | 'list';
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: 'products' | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'products';
                  value: string | Product;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'products';
                  value: string | Product;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  categories: (string | Category)[];
  relatedProducts?: (string | Product)[] | null;
  slug?: string | null;
  skipSync?: boolean | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: string | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  orderedBy?: (string | null) | User;
  customerName?: string | null;
  customerContactNumber?: number | null;
  customerEmail?: string | null;
  customerAddress?: string | null;
  homeAddress?: string | null;
  streetNo?: string | null;
  descrptiveAddress?: string | null;
  city: string;
  postalCode: number;
  stripePaymentIntentID?: string | null;
  total: number;
  items?:
    | {
        product: string | Product;
        price?: number | null;
        quantity?: number | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'customer')[] | null;
  purchases?: (string | Product)[] | null;
  stripeCustomerID?: string | null;
  cart?: {
    items?: CartItems;
  };
  skipSync?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  text?: string | null;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-us".
 */
export interface ContactUs {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "distributors".
 */
export interface Distributor {
  id: string;
  fullName: string;
  email: string;
  address: string;
  phoneNumber: number;
  company: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submission".
 */
export interface FormSubmission {
  id: string;
  from?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: string;
  productsPage?: (string | null) | Page;
  siteLogo: string | Media;
  siteCurrency:
    | 'LBP'
    | 'SAR'
    | 'AED'
    | 'BHD'
    | 'KWD'
    | 'OMR'
    | 'JOD'
    | 'USD'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'CNY'
    | 'SEK'
    | 'NZD';
  socials?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          icon?: string | Media | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  createAccountBanner: string | Media;
  loginBanner: string | Media;
  recoverPasswordBanner: string | Media;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        enableSubMenu?: boolean | null;
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          icon?: string | Media | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        subMenuItems?:
          | {
              menuHeading: string;
              subMenuLinks?:
                | {
                    link: {
                      type?: ('reference' | 'custom') | null;
                      newTab?: boolean | null;
                      icon?: string | Media | null;
                      reference?: {
                        relationTo: 'pages';
                        value: string | Page;
                      } | null;
                      url?: string | null;
                      label: string;
                    };
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  copyright?: string | null;
  navItemParent?:
    | {
        navTitle: string;
        navItems?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                icon?: string | Media | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}