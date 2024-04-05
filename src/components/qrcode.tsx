import QrCodeSvg from "react-native-qrcode-svg";
import { colors } from "@/styles/colors";

type Props = {
  value: string;
  size: number;
};

export function QRCode({ value, size }: Props) {
  return (
    <QrCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
