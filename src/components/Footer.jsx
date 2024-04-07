import TheethawatLogog from "../assets/TheethawatLogoNoSite.png";
import TDCGLogo from "../assets/tdcg.png";
import TDCLogo from "../assets/Logo_TDC - Copy.png";

function Footer() {
  return (
    <div>
      {" "}
      <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
        <div>
          <div className='grid grid-flow-col gap-4 items-center'>
            <a className='link link-hover'>
              <img src={TDCGLogo} className='h-10 lg:h-16' />
            </a>
            <a className='link link-hover'>
              <img src={TheethawatLogog} className='h-10 lg:h-16' />
            </a>
            <a className='link link-hover' href='https://theduckcreator.in.th'>
              {" "}
              <img src={TDCLogo} className='h-12 lg:h-16' />
            </a>
          </div>
        </div>

        <div>
          <p className='kanitlight'>
            {" "}
            &copy; 2024 <strong>TDC Gallery</strong>,{" "}
            <strong>Theethawat</strong> & <strong>The Duck Creator</strong>{" "}
            Source Code Available on{" "}
            <a
              className='link'
              href='https://github.com/theethawat/tdc-gallery-admin'
            >
              GitHub
            </a>
            <br />
            Front Page Made by{" "}
            <a href='https://vitejs.dev/guide/'>React JS + Vite </a>Server By{" "}
            <a className='link' href='https://openlandscape.cloud/'>
              Openlandscape Cloud
            </a>{" "}
            Image hosted In{" "}
            <a
              className='link'
              href='https://azure.microsoft.com/en-us/products/storage/blobs'
            >
              Azure Blob Storage
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
