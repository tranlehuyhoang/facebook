import { useState } from 'react'


function App() {
  const [facebookLink, setFacebookLink] = useState('');
  const [facebookID, setFacebookID] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Gửi yêu cầu tới URL để lấy ID
    try {
      const parts = facebookLink.split("/");
      const lastPart = parts[parts.length - 1];
      const response = await fetch(`https://fbuid.mktsoftware.net/api/v1/fbprofile?url=https%3A%2F%2Fwww.facebook.com%2F${lastPart}`);
      const data = await response.json();

      setFacebookID(data.uid);
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };
  return (
    <>
      <>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Công Cụ Lấy ID Facebook | Check ID | Find ID | Tìm ID Facebook</title>
        <meta data-n-head="ssr" charSet="utf-8" />
        <meta
          data-n-head="ssr"
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta
          data-n-head="ssr"
          name="description"
          content="Công cụ hoàn toàn miễn phí giúp dễ dàng tìm kiếm UID Facebook bạn bè, thành viên nhóm trên , người like, comment và share ... một cách đơn giản và dễ dàng"
        />
        <meta data-n-head="ssr" name="twitter:card" content="summary" />
        <meta
          data-n-head="ssr"
          name="twitter:description"
          content="Công cụ hoàn toàn miễn phí giúp dễ dàng tìm kiếm UID Facebook bạn bè, thành viên nhóm trên , người like, comment và share ... một cách đơn giản và dễ dàng"
        />
        <meta
          data-n-head="ssr"
          name="twitter:title"
          content="Công cụ giúp tìm kiếm UID bạn bè, thành viên nhóm, người like, comment"
        />
        <meta data-n-head="ssr" name="twitter:image" content="" />
        <meta data-n-head="ssr" property="og:locale" content="vi_VN" />
        <meta data-n-head="ssr" property="og:type" content="website" />
        <meta
          data-n-head="ssr"
          property="og:title"
          content="Công cụ giúp tìm kiếm UID bạn bè, thành viên nhóm, người like, comment"
        />
        <meta
          data-n-head="ssr"
          property="og:description"
          content="Công cụ hoàn toàn miễn phí giúp dễ dàng tìm kiếm UID Facebook bạn bè, thành viên nhóm trên , người like, comment và share ... một cách đơn giản và dễ dàng"
        />
        <meta
          data-n-head="ssr"
          property="og:url"
          content="https://id.traodoisub.com"
        />
        <meta
          data-n-head="ssr"
          property="og:site_name"
          content="Get ID By Traodoisub"
        />
        <meta data-n-head="ssr" property="fb:app_id" content="" />
        <meta data-n-head="ssr" property="og:image" content="" />
        <meta data-n-head="ssr" property="og:image:secure_url" content="" />
        <meta data-n-head="ssr" property="og:image:width" content={1200} />
        <meta name="robots" content="index, archive, follow, noodp" />
        <meta name="googlebot" content="index,archive,follow,noodp" />
        <meta name="msnbot" content="all,index,follow" />
        <link rel="shortcut icon" href="../../assets/svg/logos/logo-short.svg" />
        <link
          href="../../fonts.googleapis.com/css27217.css?family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../../assets/css/vendor.min.css" />
        <link rel="stylesheet" href="../../assets/vendor/icon-set/style.css" />
        <link rel="stylesheet" href="../../assets/css/theme.minc619.css?v=1.0" />
        <br />
        <main id="content" role="main" className="main">
          <div className="content container-fluid">
            <div className="row justify-content-lg-center">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-4">
                    <div id="accountSidebarNav" />
                    <div
                      className="js-sticky-block card mb-3 mb-lg-5"
                      data-hs-sticky-block-options='{
                   "parentSelector": "#accountSidebarNav",
                   "breakpoint": "lg",
                   "startPoint": "#accountSidebarNav",
                   "endPoint": "#stickyBlockEndPoint",
                   "stickyOffsetTop": 20
                 }'
                    >
                      <div className="card-header">
                        <h5 className="card-header-title">Một số thông tin</h5>
                      </div>
                      <div className="card-body">

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-3 mb-lg-5">
                      <div className="card-header">
                        <h5 className="card-header-title">
                          Công cụ miễn phí giúp bạn dễ dàng lấy UID Facebook một cách
                          dễ dàng.
                        </h5>
                      </div>
                      <div className="card-body">
                        <div id="noti_reg" />
                        <form id="check_form" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="formControlHoverLightFullName" className="input-label">
                              Link Facebook
                            </label>
                            <input
                              type="url"
                              className="form-control form-control-hover-light"
                              id="link"
                              name="link"
                              placeholder="Nhập Link Facebook cần lấy ID"
                              value={facebookLink}
                              onChange={(event) => setFacebookLink(event.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-block btn-primary"
                              id="check"
                              disabled={isSubmitting} // Vô hiệu hóa nút khi đang xử lý yêu cầu
                            >
                              {isSubmitting ? 'Đang xử lý...' : 'Lấy ID'}
                            </button>
                          </div>
                          {facebookID && (
                            <div>
                              <p>Kết quả: {facebookID}</p>
                            </div>
                          )}
                        </form>
                      </div>
                      <div className="card-footer" />
                    </div>
                    <div id="stickyBlockEndPoint" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="font-size-sm mb-0">
                © <span className="d-none d-sm-inline-block">2021 Traodoisub.</span>
              </p>
            </div>
            <div className="col-auto">
              <div className="d-flex justify-content-end">
                <ul className="list-inline list-separator">
                  <li className="list-inline-item">
                    <a className="list-separator-link" href="#">
                      FAQ
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <div className="hs-unfold">
                      <a
                        className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle"
                        href="javascript:;"
                        data-hs-unfold-options='{
                          "target": "#keyboardShortcutsSidebar",
                          "type": "css-animation",
                          "animationIn": "fadeInRight",
                          "animationOut": "fadeOutRight",
                          "hasOverlay": true,
                          "smartPositionOff": true
                         }'
                      >
                        <i className="tio-command-key" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>


    </>
  )
}

export default App
