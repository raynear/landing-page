import Image from 'next/image'
import { Container, ImageColumn, TextColumn, TwoColumn } from '../_styles';


export function About(props:any) {
  return (
    <div id="about">
      <Container>
        <TwoColumn>
          <ImageColumn>
            { Object.keys(props.data).length !== 0
              ?<Image src={props.data?.image?.src} height={props.data?.image?.height} width={props.data?.image?.width} alt="" />
              :<div>loading...</div>
            }
          </ImageColumn>
          <TextColumn>
            <h2>{props.data?.title}</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Why Choose Us?</h3>
            <div>
              <div>
                <ul>
                  {props.data
                    ? props.data.Why?.map((d:any, i:any) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div>
                <ul>
                  {props.data
                    ? props.data.Why2?.map((d:any, i:any) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </TextColumn>
        </TwoColumn>
      </Container>
    </div>
  );
};
