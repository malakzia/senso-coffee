import { PRODUCT } from './products'

export const COUPONS = `
  query Coupons {
    Coupons(limit: 300) {
      docs {
        id
      }
    }
  }
`

export const COUPON = `
  query Coupon($id: String ) {
    Coupons(where: { id: { equals: $id}}) {
      docs {
        id
        code
        discountType
        discountAmount
        appliesTo
        usageLimit
        expirationDate
        status
      }
    }
  }
`
