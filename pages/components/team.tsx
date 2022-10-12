import Image from 'next/image'
import { Container, ImageColumn, TextColumn, TwoColumn } from '../_styles';


export function Team(props:any) {
  return (
    <div id="team">
      <Container>
      <h3>Team</h3>
        <div>
          {Object.keys(props.data).length !== 0
            ? props.data?.map((item:any, key:any) => (<div key={key}>
                <Image src={item.img} width={100} height={120} alt={""} />
                <h3>{item.name}</h3>
                <h4>{item.job}</h4>
              </div>))
            : "loading"}
        </div>
      </Container>
    </div>
  );
};
