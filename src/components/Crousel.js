import React from 'react'

export default function Crousel() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1060&h=750&dpr=2" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Unlocking Imagination</h5>
              <p>Unlock the doors of your mind and embark on journeys untold within the pages of our books.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Community of Knowledge</h5>
              <p>A gathering place for minds thirsty for wisdom, and a haven for lifelong learners.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3431444/pexels-photo-3431444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Books: Timeless Companions</h5>
              <p>This quote celebrates the enduring nature of books as companions that transcend time.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container row m-3 ">
        <div className="card m-4" style={{ width: '18rem' }}>
          <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250178657_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Women: A Novel</h5>
            <p className="card-text">The Women by Kristin Hannah Sweepstakes
              Pre-order The Women to be automatically entered for a chance to win a Crosley record player, an assortment of  </p>
            <a href="https://www.barnesandnoble.com/w/the-women-kristin-hannah/1143461662?ean=9781250178657" className="btn btn-primary">Read This</a>
          </div>
        </div>
        <div className="card m-4" style={{ width: '18rem' }}>
          < img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250080400_p0_v6_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">The Nightingale</h5>
            <p className="card-text">A sweeping journey that will captivate you from the very first page, The Nightingale is a tale of love and loss, set against the backdrop of World War II. Hannah reframes the   </p>
            <a href="/" className="btn btn-primary">Read This</a>
          </div>
        </div >
        <div className="card m-4" style={{ width: '18rem' }}>
          < img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780425247440_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">What Alice Forgot</h5>
            <p className="card-text">Alice Love is twenty-nine, crazy about her husband, and pregnant with her first child. So imagine Alice’s surprise when she comes to on the floor of a gym a gym! She.</p>
            <a href="/" className="btn btn-primary">Read This</a>
          </div>
        </div >
      </div >

      <div className="container">
        <h2>Contact Store</h2>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" className="btn btn-primary m-3">Send</button>
        </div>
      </div>
    </>
  )
}
