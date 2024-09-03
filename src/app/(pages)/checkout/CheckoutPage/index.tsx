'use client'

import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'
import { CheckoutForm } from '../CheckoutForm'
import { CheckoutItem } from '../CheckoutItem'

import classes from './index.module.scss'

// const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
// const stripe = loadStripe(apiKey)

export const CheckoutPage: React.FC<{
  settings: Settings
}> = props => {
  const {
    settings: { productsPage, enableDelivery, deliveryValue },
  } = props

  const { user } = useAuth()
  const router = useRouter()
  // const [error, setError] = React.useState<string | null>(null)
  // const [clientSecret, setClientSecret] = React.useState()
  // const hasMadePaymentIntent = React.useRef(false)
  // const { theme } = useTheme()

  const { cart, cartIsEmpty, cartTotal } = useCart()
  const cartTotalAmount = parseFloat(cartTotal.formatted.replace(/[^0-9.-]+/g, ''))
  const deliveryAmount = deliveryValue

  useEffect(() => {
    if (user !== null && cartIsEmpty) {
      router.push('/cart')
    }
  }, [router, user, cartIsEmpty])

  // useEffect(() => {
  //   if (user && cart && hasMadePaymentIntent.current === false) {
  //     hasMadePaymentIntent.current = true

  //     const makeIntent = async () => {
  //       try {
  //         const paymentReq = await fetch(
  //           `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-payment-intent`,
  //           {
  //             method: 'POST',
  //             credentials: 'include',
  //           },
  //         )

  //         const res = await paymentReq.json()

  //         if (res.error) {
  //           setError(res.error)
  //         } else if (res.client_secret) {
  //           setError(null)
  //           setClientSecret(res.client_secret)
  //         }
  //       } catch (e) {
  //         setError('Something went wrong.')
  //       }
  //     }

  //     makeIntent()
  //   }
  // }, [cart, user])

  // if (!user || !stripe) return null

  return (
    <Fragment>
      {cartIsEmpty && (
        <div>
          {'Your '}
          <Link href="/cart">cart</Link>
          {' is empty.'}
          {typeof productsPage === 'object' && productsPage?.slug && (
            <Fragment>
              {' '}
              <Link href={`/${productsPage.slug}`}>Continue shopping?</Link>
            </Fragment>
          )}
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Products</p>
            <div className={classes.headerItemDetails}>
              <p></p>
              <p className={classes.quantity}>Quantity</p>
            </div>
            <p className={classes.subtotal}>Subtotal</p>
          </div>

          <ul className="p-0">
            {cart?.items?.map((item, index) => {
              if (typeof item.product === 'object') {
                const {
                  quantity,
                  product,
                  product: { title, meta },
                } = item

                if (!quantity) return null

                const metaImage = meta?.image

                return (
                  <Fragment key={index}>
                    <CheckoutItem
                      product={product}
                      title={title}
                      metaImage={metaImage}
                      quantity={quantity}
                      index={index}
                    />
                  </Fragment>
                )
              }
              return null
            })}
            {enableDelivery && cartTotal.formatted && (
              <div className="mt-[24px]">
                {cartTotalAmount >= deliveryAmount ? (
                  <div className="flex items-center gap-[12px] justify-center">
                    <h6
                      className={`text-gradient-delivery text-transparent bg-clip-text text-h5 font-semibold leading-[120%] ${classes.textGradientDelivery}`}
                    >
                      Congratulations! You’ve Earned Free Delivery!
                    </h6>{' '}
                  </div>
                ) : (
                  <div>
                    {/* <p className='text-h6 font-medium leading-[120%] text-brand-red'>Spend ${deliveryAmount - cartTotalAmount} more for free delivery.</p> */}
                  </div>
                )}
              </div>
            )}
            <div className={classes.orderTotal}>
              <p className="text-b18 font-semibold leading-headingLH1 text-brand-dark">
                Order Total
              </p>
              <p className="text-b18 font-semibold leading-headingLH1 text-brand-dark">
                {cartTotal.formatted}
              </p>
            </div>
          </ul>
        </div>
      )}
      {/* {!clientSecret && !error && (
        <div className={classes.loading}>
          <LoadingShimmer number={2} />
        </div>
      )}
      {!clientSecret && error && (
        <div className={classes.error}>
          <p>{`Error: ${error}`}</p>
          <Button label="Back to cart" href="/cart" appearance="secondary" />
        </div>
      )} */}
      {/* {clientSecret && ( */}
      <Fragment>
        {/* <h3 className={classes.payment}>Payment Details</h3>
          {error && <p>{`Error: ${error}`}</p>}
          <Elements
            stripe={stripe}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorText:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  fontSizeBase: '16px',
                  fontWeightNormal: '500',
                  fontWeightBold: '600',
                  colorBackground:
                    theme === 'dark' ? cssVariables.colors.base850 : cssVariables.colors.base0,
                  fontFamily: 'Inter, sans-serif',
                  colorTextPlaceholder: cssVariables.colors.base500,
                  colorIcon:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  borderRadius: '0px',
                  colorDanger: cssVariables.colors.error500,
                  colorDangerText: cssVariables.colors.error500,
                },
              },
            }}
          > */}
        {!cartIsEmpty && <CheckoutForm />}
        {/* </Elements> */}
      </Fragment>
    </Fragment>
  )
}
