import React from "react";
import PropTypes from "prop-types";
import AlbumList from "../components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      imagesUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/c/f/0/5cf040be8eefd947f6cd437cb1390978.jpg",
    },
    {
      id: 2,
      name: "Nhạc Trung Thịnh Hành",
      imagesUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/b/7/55b70283079e6f000758602b737d3180.jpg",
    },
    {
      id: 3,
      name: "Nhạc Viet Thịnh Hành",
      imagesUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} /> {/* Pass albumList as a prop */}
    </div>
  );
}

export default AlbumFeature;
