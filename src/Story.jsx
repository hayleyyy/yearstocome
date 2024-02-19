import HTMLFlipBook from "react-pageflip";
import { Container } from "react-bootstrap";

function MyBook(props) {
  return (
    <HTMLFlipBook
      className="book"
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.2}
      showCover={true}
      mobileScrollSupport={true}
    >
      <div className="book-page">
        <div className="book-page-content">
          <h2>Our story begins...</h2>
          <h5>When we first met:</h5>
          <p>
            A few sentences about how you met, your time courting or as friends
            or dating. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam sagittis consectetur libero et cursus. Nunc rutrum, turpis
            eget tincidunt posuere, dolor nulla feugiat diam, eu semper risus
            turpis ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h5>When we fell for each other:</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h2>Our time together...</h2>
          <h5>Our first year anniversary:</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h5>Our little family:</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h2>We set out on new adventures.</h2>
          <h5>Our trips around the world...</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h5>The adventures continue..</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h2>Making a promise.</h2>
          <h5>The proposal:</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
      <div className="book-page">
        <div className="book-page-content">
          <h2>Our future together...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            sagittis consectetur libero et cursus. Nunc rutrum, turpis eget
            tincidunt posuere, dolor nulla feugiat diam, eu semper risus turpis
            ac nibh.
          </p>
        </div>
      </div>
    </HTMLFlipBook>
  );
}

function Story() {
  return (
    <>
      <Container fluid className="section-story" id="book">
        <h1 className="section-story-title">Our Story</h1>
        <Container fluid className="book-bg">
          <Container>
            <MyBook></MyBook>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Story;
