
import { Player } from 'video-react';
import { CloseOutlined } from '@ant-design/icons';
import "./HeroBanner.css";

const Modal = ({showModal, setShowModal}) => {

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-end">
                  <button
                    className="bg-transparent pb-3 border-0 text-white float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white h-8 w-8 text-3xl block">
                      <CloseOutlined />
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto">
                  <Player autoPlay={true} className="videoplayer" >
                    <source src="https://ownaparisbaguette.com/wp-content/uploads/2023/07/ParisBaguette_FINAL_compressed.mp4" />
                  </Player>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;