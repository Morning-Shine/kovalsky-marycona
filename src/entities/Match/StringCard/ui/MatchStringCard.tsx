import React from 'react';
import { Avatar, IMatch, Label } from 'shared';
import { MatchInfo, MatchStringCardCont, ScoreInfo, TeamInfo } from './styled';
import { TLabelProps } from 'shared/ui/Label/type';
import { teamIcon } from 'shared';

export const MatchStringCard: React.FC<IMatch> = (props) => {
  const { awayTeam, homeTeam, awayScore, homeScore, status } = props;
  let labelMode: TLabelProps['mode'];
  switch (status) {
    case 'Finished':
      labelMode = 'error';
      break;
    case 'Ongoing':
      labelMode = 'success';
      break;
    case 'Scheduled':
      labelMode = 'info';
      break;
  }
  return (
    <MatchStringCardCont>
      <TeamInfo>
        <Avatar imgPath={teamIcon} />
        <p>{awayTeam.name}</p>
      </TeamInfo>

      <MatchInfo>
        <ScoreInfo>
          <h6>{awayScore}</h6>
          <span>:</span>
          <h6>{homeScore}</h6>
        </ScoreInfo>
        <Label
          name={status}
          mode={labelMode}
        />
      </MatchInfo>

      <TeamInfo>
        <p>{homeTeam.name}</p>
        <Avatar imgPath={teamIcon} />
      </TeamInfo>
    </MatchStringCardCont>
  );
};
