import PrivateInfoCard from "@/app/panel/private-info-card";
import KiiPrivateInfoForm from "@/app/panel/kii-private-info-form";
import { KiiPrivateInfoContext } from "@/contexts";
import useKiiPrivateInfo from "@/hooks/use-kii-private-info";

export default function PrivateInfo() {
  const { kiiPrivateInfo, loading, setKiiPrivateInfo, handleGetKiiPrivateInfo, handleSetKiiPrivateInfo } = useKiiPrivateInfo();

  return <KiiPrivateInfoContext.Provider value={{ kiiPrivateInfo, loading, setKiiPrivateInfo, handleGetKiiPrivateInfo, handleSetKiiPrivateInfo }}>
    <PrivateInfoCard />
    <KiiPrivateInfoForm />
    </KiiPrivateInfoContext.Provider>
}