import React from "react";
import { Link } from "react-router-dom";
import "./RedeemVoucher.css";
import redeem_bg from "../../../images/redeem-background.jpg";

const RedeemVoucher = (props) => {
  return (
    <>
      <section className="bg-wrapper">
        <div className="image-bg">
          <img src={redeem_bg} alt="redeem" />
        </div>
      </section>
      <div
        className={`container movie-cards-section no-mini-banners ${
          props.pathname ? "" : "no-banner"
        }`}
      >
        <div className="redeem-section">
          <div className="redeem-voucher-container">
            <div className="redeem-voucher-head">
              <h2 className="redeem-voucher-title">Redeem your voucher</h2>
              <p className="redeem-voucher-info">
                Enter your voucher code below:
              </p>
            </div>
          </div>
          <div className="redeem-voucher-top">
            <div className="redeem-voucher-input">
              <input
                type="text"
                className="redeem-input"
                name="redeem"
                placeholder="Enter your voucher code"
              />
              <button className="redeem-submit-btn ">Redeem</button>
            </div>
          </div>
          <div className="redeem-voucher-information-container">
            <div className="redeem-voucher-information">
              <h3 className="redeem-voucher-information-title">
                Sky Store Vouchers
              </h3>
              <div className="redeem-voucher-information-content">
                <p>
                  Got a Sky Store Voucher? Simply enter your voucher code to get
                  started.
                </p>
                <p>
                  Buy &amp; Keep all the latest movies direct from the cinema
                  and TV shows too. Straight to your TV*, on your devices and
                  the DVD or box set in the post.
                </p>
              </div>
              <div className="vouchers-redeem-information-paragraph-link">
                <Link to="/">Frequently Asked Questions </Link>
              </div>
              <div className="vouchers-redeem-information-paragraph-requirements">
                {" "}
                Requires{" "}
                <Link to="n/hwtw/help/faq/ways-to-watch">
                  {" "}
                  compatible Sky box or NOW TV box{" "}
                </Link>{" "}
                connected to broadband{" "}
              </div>
            </div>
          </div>

          <div className="collapsable-container">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Terms and Conditions for Sky Store Vouchers
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {/* Content */}
                    <div className="vouchers-redeem-terms">
                      <p>
                        These Terms and Conditions were last updated in May 2017
                        in relation to clause 3 by adding a new voucher type.
                      </p>
                      <p>
                        Vouchers are issued in the UK by Sky UK Limited and in
                        the Republic of Ireland by Sky Ireland Limited
                        (collectively "<b>Sky</b> ").&nbsp;
                      </p>
                      <p>
                        {" "}
                        By redeeming your Voucher, you agree to the following
                        conditions:
                      </p>
                      <ol>
                        <li>
                          Unless stated otherwise, Vouchers may only be redeemed
                          and spent on either the Sky Store website located
                          at&nbsp;
                          <a href="http://www.skystore.com">skystore.com</a>
                          &nbsp;(the "<b>Website</b>
                          ") or the Sky Store app on your compatible Roku box or
                          Android device. Vouchers cannot be used for purchases
                          made on a Sky+HD box or a Sky Q box. However, Buy
                          &amp; Keep purchases made using redeemed Vouchers can
                          be sent to the box.
                        </li>
                        <li>
                          <b>Eligibility</b>:&nbsp;To redeem a Voucher you must
                          have a SkyiD account and have accepted the Sky Store
                          terms and conditions. These terms apply in addition to
                          the Sky Store terms and conditions and in the event of
                          any conflict, these terms prevail.
                        </li>
                        <li>
                          <b>Redemption</b>:&nbsp;Vouchers are either assigned a
                          fixed monetary value ("<b>Monetary Vouchers</b>") , or
                          a percentage or monetary value off the purchase price
                          ("<b>Discount Vouchers</b>") or permit access to a
                          particular title ("<b>Content Vouchers</b>",
                          collectively with Monetary Vouchers and Discount
                          Vouchers, the "<b>Vouchers</b>"). Depending on your
                          Voucher type, we'll either reduce the price of your
                          next purchase by the amount stated on your Discount
                          Voucher, add the title or amount of credit your
                          Voucher entitles you to, to your Sky Store account on
                          the Website when you redeem the Voucher.&nbsp;
                        </li>
                        <li>
                          Vouchers must be redeemed by the expiry date specified
                          on the Voucher or in accompanying materials.
                        </li>
                        <li>
                          When redeemed, Monetary Vouchers will credit your
                          account with a value in the local currency and all
                          purchases will be with that currency. When you make a
                          purchase, the cost will be deducted from the value
                          held in your account and if there is any difference
                          between the cost of the purchase and the value in your
                          account, you will need to pay this amount.
                        </li>
                        <li>
                          Once added to your account, for any Vouchers issued
                          from 16th December 2016, you will have 12 months in
                          which to use your credit balance before the balance is
                          removed from your account. For Vouchers issued prior
                          to this date you will have 36 months in which to use
                          your credit balance before it is removed from your
                          account.&nbsp;
                        </li>
                        <li>
                          Any unused balances are not redeemable for cash or
                          transferable and will not be returned to you (unless
                          we are required to by law).
                        </li>
                        <li>
                          Content Vouchers can only be used in relation to the
                          title or content for which they are issued and set out
                          either on the Voucher itself or within the
                          accompanying materials.
                        </li>
                        <li>You can't re-load or top-up Vouchers.</li>
                        <li>
                          Vouchers are for your own personal non-commercial use
                          and not for resale.
                        </li>
                        <li>
                          If you received a Voucher because you placed another
                          order with Sky and you subsequently cancel that other
                          order (for example, if you exercise your cooling off
                          rights in respect to it) we reserve the right to
                          cancel the voucher and/or remove the voucher balance
                          from your Sky Store account. subsequently cancel that
                          other order (for example, if you exercise your cooling
                          off rights in respect to it) we reserve the right to
                          cancel the voucher and/or remove the voucher balance
                          from your Sky Store account.
                        </li>
                        <li>
                          Sky is not responsible for any Vouchers that are lost,
                          stolen, destroyed or used without your permission.
                        </li>
                        <li>
                          If a valid Voucher cannot be redeemed as expected
                          because it is faulty we'll replace it.
                        </li>
                        <li>
                          A Voucher is not a credit, debit or charge card. A
                          Voucher cannot be exchanged for other Vouchers and is
                          not refundable (for cash or otherwise), except to the
                          extent required by law.
                        </li>
                        <li>
                          We may update or amend these terms and conditions from
                          time to time to improve the Sky Store service or as
                          new products and features become available. The latest
                          version of the terms and conditions will be available
                          on the Website.
                        </li>
                      </ol>
                    </div>
                    {/* Content Ends */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemVoucher;
