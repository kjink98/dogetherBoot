import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function UseKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "dd75f59486cdfe462100e0ac5ea0ed2d",
    libraries: ["services"]
  })
}