import { Billboard } from "@/components/Billboard";
import { Container } from "@/components/ui/Container";
import { getBillboard } from "../actions/getBillboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("76d5722c-262d-473f-b18f-fb73907516a5");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
