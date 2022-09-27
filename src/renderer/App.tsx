import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaHeart, FaHome, FaRegIdBadge, FaShoppingBag } from 'react-icons/fa';
import {
  BsFillPeopleFill,
  BsFillPersonPlusFill,
  BsPerson,
} from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from './assets/images/cloudCity-logo.png';
import chatImg from './assets/chats/chat-1.png';

const Hello = () => {
  return (
    <>
      <main className="main__container">
        <section className="main__container--sidebar">
          <figure className="main__container--sidebar__logo">
            <img src={logo} alt="cloud city logo" loading="lazy" />
          </figure>
          <ul className="main__container--sidebar__content">
            <div className="active__content">
              <i>
                <FaHome />
              </i>
              <li>Home</li>
            </div>

            <div>
              <i>
                <FaShoppingBag />
              </i>
              <li>Marketplace</li>
            </div>

            <div>
              <i>
                <FaRegIdBadge />
              </i>
              <li>News Feed</li>
            </div>

            <div>
              <i>
                <BsFillPeopleFill />
              </i>
              <li>Community</li>
            </div>

            <div>
              <i>
                <FaHeart />
              </i>
              <li>Wishlist</li>
            </div>
          </ul>
        </section>

        <section className="main__container--content-container">
          <div className="main__container--content-container__nav-container">
            <fieldset>
              <input type="search" placeholder="search" />
            </fieldset>
          </div>

          <div className="main__container--content-container__banners-container">
            <div className="main__container--content-container__banner-container--banner active__banner">
              <div className="main__container--content-container__banner-container--banner__content">
                <figure className="main__container--content-container__banner-container--banner__content--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6c64/4348/a776690944a147cd2aecc964aea9c4d7?Expires=1665360000&Signature=GANrd-GlRvTTrVf8Kx2LjNRsOmvbAji5~Gip0oJ9IM~1X5hjoQ7FFHtKLaDQDptMdtvcnt-Fo1uP5LeA8FaaLbceTg7u8R2tMmmM2r6DXo7YIyl8CX2iR80dmuPfnzUDjGavBIBy8K2bb6OFMfa9NrPmezI1URrbJcCC7vgYAP5dN4kud1fgz6VBDY0hreQyDWwo5hj0gbXgIxCmcUBx1m5v2IpeKRM4PuufSO3NT7Aw6yokcb6ShJQayroAymoHdVc9sTSp5SDHBk16YG3zYaJzahWT2bsLSoMZbfCMjGZ7b3WZeHLNLR1xeR1jW7glF3hghjT5g23rpRlbwRACQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="banner logo"
                    loading="lazy"
                  />
                </figure>
                <p className="main__container--content-container__banner-container--banner__content--para">
                  Dive into the virtual world you have{' '}
                  <span>been promised.</span>
                </p>
                <a
                  href="#"
                  className="main__container--content-container__banner-container--banner__content-btn explore__btn"
                >
                  EXPLORE
                </a>
              </div>
              <figure className="main__container--content-container__banner-container--banner__img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9250/9157/0e98e1d23bc03420b921ba73122f7b0b?Expires=1665360000&Signature=Pl8aP3QocXJOZWGoQSbENsoP5sNRCQFuADRg8PtyV1RzgTMSO8feUZAcSBgTuR8n0hjcmkeqZu1d3U~-6gjH7dFq~qbxujNTt9jY0WchIasLr-z6REx1VMKNx1Q50jPL6Mml6uwcPIdrlbBhZaK3U9wGR-qMnuNKwHK0ZE6duPHHs7neZZw4mNGoaScphzV3TTk8imoViAWfP4nCPWiXg6np~z6-m0vAfx2z9tmEZ~pnYV5XGTkJyITLEPe5BPxlSr0Db8c3DHJz7Cr49cig1lWldde4UAwwQErNvKKYKaog9gr5MGDXrqE2N8bBShTUROgG-3TfesTdsjtRwKXnyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="banner"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="main__container--content-container__banner-container--banner">
              <div className="main__container--content-container__banner-container--banner__content">
                <figure className="main__container--content-container__banner-container--banner__content--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9e20/a10d/7f7e621d3e99b085da08a39653c7b4c0?Expires=1665360000&Signature=AfsVf6xk07Idgc3XWej6u-kst~Xsy-y0~GZxBXT3vqoICRwTG4PX14GuQnnE0goOk26Iw-sPzxEQ4FWVX--19H9jX9-soeXlWnIG~e2CWQj30ccMs9-BUl9DjyZ4S4pLDaGyFxXb0rE23zFXYF2bF9VQ1D-UwTvzkqTTIlw070hKNBXn7a0-miKxfgIotlvn2fFVhPnQ9s8Lmoj1WldHdbm64ZRKEXbirYNGFw7RVRR2oXcjej2G24fZ2KasudyRHWNolequD4ojbqhltGyNEJI27E-1jnb64bo4dMQiqaxh3JmbbK7E9ttzyxbjPM5tyBP672P~ltIj7tZ5HdPONA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="banner logo"
                    loading="lazy"
                  />
                </figure>
                <p className="main__container--content-container__banner-container--banner__content--para">
                  Experience an immersive AAA <span>arcade racing game!</span>
                </p>
                <a
                  href="#"
                  className="main__container--content-container__banner-container--banner__content-btn play__btn"
                >
                  PLAY FOR FREE
                </a>
              </div>
              <figure className="main__container--content-container__banner-container--banner__img">
                <img
                  src="https://s3-alpha-sig.figma.com/img/550b/ac67/6fe08a82263ed6dd00d128e57c0a3250?Expires=1665360000&Signature=dLnHU4rGulnSVTDWvvXo37Zr7pa-pZg9UNFLxBU1pr59an~70w0boGt8ak5G-icN-ro2kHOwS0mt7ull28rvy4htiBEcXI9LVxHN3miQiWfSGbNnTTCNuFRALZ0q5hYxERNhGRhyV7TwgFQq~mVj~eieeLKoLGRI3yvuAJDojUtnUpYfRrOtX9Uxbe0J6tTV7bjfp1JyItt8QG3E7gzk2PaobzFrwGY31EIwCcxvTtkBjDd9Iy96lpdhziBnHMIRGdV0QbMtLMaHu8gHqP8mLOsZkS2GeuGI1jbeTHxgoVd4Ju7Cob4k5~22BVyt1uBgmQjvTUQ6eM-umjzobXHTBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="banner"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>

          <div className="main__container--content-container__events">
            <h3 className="main__container--content-container__events--title">
              Upcoming Events
            </h3>

            <div className="main__container--content-container__events--container">
              <div className="main__container--content-container__events--container__event">
                <figure className="main__container--content-container__events--container__event--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4ab9/8104/f147fa7b9c369d856ca520e99447e9f1?Expires=1665360000&Signature=TPZjS~OhzCVVwJ6dWeNfMumHB0Xb7GevI45Z8aN37nCiTC2X339L-LeqztAQmACqULfwhdPZPyw2ELouqPhTUz15xDzBNDPsOv1r2oboOtJZKuHReqz0F-0Ts6R1ukuTjIYsBD~lJLRP5ft07HJx3U~M3n9NHgy1tZesi4djfGQUJ6VIr7qhL~NGraemupoF~DB5hmmOhTLqQ0Cl8M18jSTiLQdazZZUSAB7acWNq57RuUy0vjL~YJng8O-8nebLhmSd5n163tIJAzQIE~tTyOqCUSmIF8eWTjY9fyq9DRd1~F88WPPrrZ5X2W6NyyZjWkZ7vpIhAyVw-Jyww--UMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="events"
                    loading="lazy"
                  />
                </figure>
                <div className="main__container--content-container__events--container__event--title">
                  <h3>NFL 2022</h3>
                  <p>sports</p>
                </div>
              </div>

              <div className="main__container--content-container__events--container__event">
                <figure className="main__container--content-container__events--container__event--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ff64/efc8/17c48970e3c3725623c322a9f6e2f323?Expires=1665360000&Signature=JaTx-AzoauyFNYEl4LwejgR04psMfaTqpd82unai4FxN4kVLtIr~rkKES-D4VOwZ2EJAYY1gnRpebwE5-h~OvV-ETNmF3fgSdBDniA~SC-KnQKOhSrAU9d6ZoKeI3jz~0Fz4DQmIgDWNVPEbmCL98qMvjz0VGuqlMts0Zw8bowwo4tkN1Ub0W9JllA2-8Qd2pS7WOLBQZSqIM3b86Ywyz19i2i8cBL4pfqsKtUholaczL3xaJ-QjrXlRFmztHTMCfzCQTPuyQQJdRQjPedARM4kNja-bfOdvat49NC0eKjVl9E-nggi69uEQD4n3In3DvP4lrsDLSCt3n-2lsqSJ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="events"
                    loading="lazy"
                  />
                </figure>
                <div className="main__container--content-container__events--container__event--title">
                  <h3>Sim City 2</h3>
                  <p>Arcade/Strategy</p>
                </div>
              </div>

              <div className="main__container--content-container__events--container__event">
                <figure className="main__container--content-container__events--container__event--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a529/317c/7a75c9d6b476b82ef9a26aa00157b4a0?Expires=1665360000&Signature=DuYBWOKYiRldggTqC2UmyeO8H-Aut0tkf1R7X3bPEWCcSgL6s9-1gk7usLBdNNJGOhJIPeez5yaB2ggxAYjMaeXJ4SCqK7lBLviqby50uWMnLUr0-2btGA5xkqdw6RX6TvpEDsPHvnPHHzqFfzKiLQGHQedJ1QBNxHxNlJRGcNXzfpJVY5yd~vshHCEWzS5IEZwns7sJF4oV6bh1a0ZhXbVf5xCEOlWKnBzqDOCfdPo8nGoNq021CQSyGp5JSRLts2ZBK2w-2vEe10La6sjyuBFNPJigEU3Dm9~-0W3B~RqyZKzomT4NyLOhKeTMeX9sbLHsgBI2qf3vnJObWgVutQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="events"
                    loading="lazy"
                  />
                </figure>
                <div className="main__container--content-container__events--container__event--title">
                  <h3>Doom 4: End of World</h3>
                  <p>Doom 4: End of World</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="main__container--chat-container">
          <div className="main__container--chat-container__login">
            <div className="main__container--chat-container__login--content">
              <i className="main__container--chat-container__login--content__logo">
                <BsPerson />
              </i>
              <div className="main__container--chat-container__login--content__description">
                <h3>TheButcher</h3>
                <p>online</p>
              </div>
            </div>
            <i className="main__container--chat-container__logo">
              <MdKeyboardArrowDown />
            </i>
          </div>

          <div className="main__container--chat-container__content">
            <div className="main__container--chat-container__content--search-container">
              <i className="main__container--chat-container__content--search-container__logo">
                <BsFillPersonPlusFill />
              </i>
              <fieldset>
                <input type="search" placeholder="Search friends" />
              </fieldset>
            </div>

            <div className="main__container--chat-container__content--chats">
              <div className="main__container--chat-container__content--chats__chat">
                <figure className="main__container--chat-container__content--chats__chat--img chat__active">
                  <img src={chatImg} alt="chat-icon" loading="lazy" />
                </figure>
                <p className="main__container--chat-container__content--chats__chat--desc">
                  Billythebutcher
                </p>
              </div>

              <div className="main__container--chat-container__content--chats__chat">
                <figure className="main__container--chat-container__content--chats__chat--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/7a07/a920/115748a2208f913bb0e1847aa9b9daf8?Expires=1665360000&Signature=RY1r4RYluw7m7noufcV2OWMjjYIKCqBsJLyepEYoiHuxLuLgkSiujTDRf4aFxUqFbWtEbBGMoKRIiQfNxXgsVaM1tvwAZfyiGYB~nx760UkNv9Fl0ywRatlM4vXTyb5vZjGsvoYkTfqCIWom5ojNQNF5la1mlCdBnm0tBy8H6ibrHuE3f4ZdyRPAgwIGlZVUrkahXmvlwIxsAzBVehoMa5ypGzy79OsrS6qcnmfC2FpA0Dv6wzOXtKoMY6SFX51MjwROMcsZBy~b3mJIKm4j62-agtspTnNnRVqfe6H0MFrq7EoPbnfzJiw-J05bX9QXPKYNHHhB-5YrIu64-f1rAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="chat-icon"
                    loading="lazy"
                  />
                </figure>
                <p className="main__container--chat-container__content--chats__chat--desc">
                  Team Arsenic
                </p>
              </div>

              <div className="main__container--chat-container__content--chats__chat">
                <figure className="main__container--chat-container__content--chats__chat--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0c36/ee9e/eb3f8173a949ef3218092d233b62ece2?Expires=1665360000&Signature=RTmv28mnltwqvnCKaBhp1sebamMpBQuTzzu2w0THR8JH35nwar-4rNLUyShgXbQD3adMVVsj92VubIU51Czebpfmkvscz5FjCjEgzCMwN8XJLJNyO22Ty5W4kJ3n8A6lG~kEkJ9j61I5N56F0aPDXMi~d1Vc8CAxVApA7wKVxQijbgOGSMXgRJk-JSnYvjMMCsM2zLEenZigoXSDiTvnPZ6wTa90giYuNlC4sIvwfaTnUP6flCvmY4PKTZF0KTsWJNSVRMZnIKPEN5dJQein-mt2jiP5wdzH7SzVk2Ovbnlksa818Tb6Xqck7blTz-YpJszX2VBBGuJxvVHh1-7E7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="chat-icon"
                    loading="lazy"
                  />
                </figure>
                <p className="main__container--chat-container__content--chats__chat--desc">
                  ambush
                </p>
              </div>

              <div className="main__container--chat-container__content--chats__chat">
                <figure className="main__container--chat-container__content--chats__chat--img">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9448/aa3f/4e189f0ca19756f4adfcbbd6cb7cf1b9?Expires=1665360000&Signature=YSyJ26t7-m1WSE5GaDINWvSAJsccaROfbohwXdytLLFteehWVzY~hodckLf3QCiMYrkyuKsLzhEG0zJwrZ9ZFR-SKcZK4uuEdnNmfi-ytheDjgb33SEkQjspb-Xqt7qUJbkJN2tsYEfHZTjfHjjVHjfRR1SXhVZXhtL~1CacIPOQvIPnHvD-GUdzARlqH48~FrYSIjj-tZdgt4dddRHxBdeE8xYLotokPIfeqKCKBbhT3-e1o8admBrI1aWW5~1LRDFGNErZG9EPHpMo3pXZjYa4Rd3YX2LTLeWo2oDZDJaO4HSfl8ScqW5VC13vuA0lHlh-mXZX~S5XunShxrH4CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="chat-icon"
                    loading="lazy"
                  />
                </figure>
                <p className="main__container--chat-container__content--chats__chat--desc">
                  Dug Funnie
                </p>
              </div>
            </div>
          </div>

          <div className="main__container--chat-container__btn">
            <a href="#">CHATS AND GROUPS</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
