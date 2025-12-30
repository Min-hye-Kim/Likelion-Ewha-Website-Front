import React from "react";
import styled from "styled-components";
import { curriculums } from "@/data";

const Curriculum = ({ part = "pm" }) => {
  let curriculum;
  if (part === "fe") curriculum = curriculums.feCurriculum;
  else if (part === "be") curriculum = curriculums.beCurriculum;
  else curriculum = curriculums.pmCurriculum;

  const { title, subTitle, description, color1, color2, sessions } = curriculum;
  return (
    <Grid>
      <PartCard $color1={color1}>
        <Title className="h3-extrabold">{title}</Title>
        <SubTitle className="h5-regular">{subTitle}</SubTitle>
        <Description className="h5-medium">{description}</Description>
      </PartCard>
      <CurriculumList>
        {sessions.map(({ sesstioinNum, sessionTitle }, idx) => (
          <SessionList key={idx}>
            <SessionNum $color2={color2} className="footnote-extrabold">{sesstioinNum}</SessionNum>
            <SessionTitle className="h5-regular">{sessionTitle}</SessionTitle>
          </SessionList>
        ))}
      </CurriculumList>
    </Grid>
  );
}

export default Curriculum;


const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(21.8125rem, 1fr) minmax(13.1875rem, 1fr);
  gap: 1.25rem;
  align-items: start;
`;

const PartCard = styled.div`
  background: ${({ $color1 }) => $color1};
  display: flex;
  padding: 1.75rem 2rem;
  flex-direction: column;
  align-items: start;

  border-radius: 0.75rem;
`;

const Title = styled.div`
  color: var(--neutral-20);
  margin-bottom: 0.25rem;
`;

const SubTitle = styled.div`
  color: var(--neutral-50);
  margin-bottom: 5rem;
`;

const Description = styled.div`
  color: var(--neutral-20);
`;

const CurriculumList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SessionList = styled.div`
  width: 100%;
  display: flex;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
  white-space: nowrap;
  
  border-radius: 0.40731rem;
  border: 1px solid var(--neutral-95);
`;

const SessionNum = styled.div`
  display: flex;
  width: 2.25188rem;
  height: 1.66rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background: ${({ $color2 }) => $color2};
  color: var(--static-white);
  border-radius: 0.40731rem;
`;

const SessionTitle = styled.div`
`;