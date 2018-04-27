import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon as BaseIcon } from 'react-native-elements';
import { colors, fonts, normalize } from 'config';
import { InlineLabel } from 'components';
import styled from 'styled-components';

import { relativeTimeToNow, t } from 'utils';

const marginLeftForIconName = name => {
  switch (name) {
    case 'git-branch':
    case 'git-merge':
    case 'primitive-dot':
      return 8;
    case 'bookmark':
      return 6;
    case 'person':
    case 'lock':
      return 4;
    default:
      return 2;
  }
};

const Container = styled.View`
  padding-top: 10;
  padding-right: 10;
  background-color: transparent;
  flex-direction: row;
  align-items: stretch;
`;

const Icon = styled(BaseIcon).attrs({
  iconStyle: props => ({
    marginTop: 1,
    color: props.color,
    marginLeft: marginLeftForIconName(props.name),
  }),
  containerStyle: props => ({
    borderRadius: 13,
    width: 26,
    height: 26,
    marginLeft: 14,
    marginRight: 14,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 26,
    backgroundColor: props.backgroundColor,
  }),
})``;

const ContentContainer = styled.View`
  flex-direction: row;
  flex: 1 1;
  border-bottom-color: ${colors.greyLight};
  border-bottom-width: 1;
`;

const EventTextContainer = styled.View`
  padding-bottom: 10;
  flex-flow: row wrap;
  flex: 1 1;
  align-items: center;
`;

const DateContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
  align-self: flex-start;
  margin-top: 2;
  flex: 0 0 39px;
  width: 39;
`;

const Date = styled.Text`
  color: ${colors.greyDark};
`;

const BoldText = styled.Text`
  ${fonts.fontPrimaryBold};
  font-size: ${normalize(13)};
  color: ${colors.primaryDark};
`;

export class IssueEventListItem extends Component {
  props: {
    repository: Object,
    event: Object,
    navigation: Object,
    locale: String,
  };

  onPressUser = user => {
    this.props.navigation.navigate('Profile', { user });
  };

  onPressIssue = source => {
    this.props.navigation.navigate('Issue', {
      repoId: source.repository.nameWithOwner.toLowerCase(),
      issueNumber: source.number,
    });
  };

  handleReviewRequested(event, repository) {
    // FIXME: repository should not exist
    const actor = <ActorLink actor={event.actor} onPress={this.onPressUser} />;
    const reviewer =
      event.requestedReviewer.__typename === 'User' ? (
        <ActorLink actor={event.requestedReviewer} onPress={this.onPressUser} />
      ) : (
        <BoldText>
          {repository.owner.login}/{event.requestedReviewer.name}
        </BoldText>
      );

    return (
      <Event
        iconName="eye"
        text={
          <Text>
            {t('{actor} requested review from {reviewer}', this.props.locale, {
              actor,
              reviewer,
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleLabeledEvent(event) {
    return (
      <Event
        iconName="tag"
        text={
          <EventTextContainer>
            {t('{actor} added {label}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              label: <InlineLabel label={event.label} />,
            })}
          </EventTextContainer>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleUnlabeledEvent(event) {
    return (
      <Event
        iconName="tag"
        text={
          <EventTextContainer>
            {t('{actor} removed {label}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              label: <InlineLabel label={event.label} />,
            })}
          </EventTextContainer>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleAssignedEvent(event) {
    return (
      <Event
        iconName="person"
        text={
          <Text>
            {t('{actor} assigned {assignee}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              assignee: (
                <ActorLink actor={event.assignee} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleUnassignedEvent(event) {
    return (
      <Event
        iconName="person"
        text={
          <Text>
            {t('{actor} unassigned {assignee}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              assignee: (
                <ActorLink actor={event.assignee} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleClosedEvent(event) {
    return (
      <Event
        iconName="circle-slash"
        iconColor={colors.white}
        iconBackgroundColor={colors.darkerRed}
        text={
          <Text>
            {t('{actor} closed this', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleReopenedEvent(event) {
    return (
      <Event
        iconName="primitive-dot"
        iconColor={colors.white}
        iconBackgroundColor={colors.green}
        text={
          <Text>
            {t('{actor} reopened this', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleRenamedTitleEvent(event) {
    return (
      <Event
        iconName="pencil"
        text={
          <Text>
            {t(
              '{actor} changed the title from {previousTitle} to {currentTitle}',
              this.props.locale,
              {
                actor: (
                  <ActorLink actor={event.actor} onPress={this.onPressUser} />
                ),
                previousTitle: <BoldText>{event.previousTitle}</BoldText>,
                currentTitle: <BoldText>{event.currentTitle}</BoldText>,
              }
            )}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleDemilestonedEvent(event) {
    return (
      <Event
        iconName="milestone"
        text={
          <Text>
            {t(
              '{actor} removed this from the {milestone} milestone',
              this.props.locale,
              {
                actor: (
                  <ActorLink actor={event.actor} onPress={this.onPressUser} />
                ),
                milestone: <BoldText>{event.milestoneTitle}</BoldText>,
              }
            )}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleMilestonedEvent(event) {
    return (
      <Event
        iconName="milestone"
        text={
          <Text>
            {t(
              '{actor} added this to the {milestone} milestone',
              this.props.locale,
              {
                actor: (
                  <ActorLink actor={event.actor} onPress={this.onPressUser} />
                ),
                milestone: <BoldText>{event.milestoneTitle}</BoldText>,
              }
            )}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleUnlockedEvent(event) {
    return (
      <Event
        iconName="key"
        iconColor="white"
        iconBackgroundColor="black"
        text={
          <Text>
            {t('{actor} unlocked this conversation', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleLockedEvent(event) {
    const actor = <ActorLink actor={event.actor} onPress={this.onPressUser} />;

    if (event.lockReason) {
      return (
        <Event
          iconName="lock"
          iconColor="white"
          iconBackgroundColor="black"
          text={
            <Text>
              {t(
                '{actor} locked this conversation as {reason}',
                this.props.locale,
                {
                  actor,
                  reason: event.lockReason,
                }
              )}
            </Text>
          }
          createdAt={event.createdAt}
        />
      );
    }

    return (
      <Event
        iconName="lock"
        iconColor="white"
        iconBackgroundColor="black"
        text={
          <Text>
            {t('{actor} locked this conversation', this.props.locale, {
              actor,
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleMergedEvent(event) {
    return (
      <Event
        iconName="git-merge"
        iconColor={colors.white}
        iconBackgroundColor={colors.purple}
        text={
          <Text>
            {t('{actor} merged {commit}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              commit: <BoldText>{event.commit_id.slice(0, 7)}</BoldText>,
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleHeadRefDeletedEvent(event) {
    return (
      <Event
        iconName="git-branch"
        iconColor={colors.white}
        iconBackgroundColor={colors.greyBlue}
        text={
          <Text>
            {t('{actor} deleted this branch', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleHeadRefRestoredEvent(event) {
    return (
      <Event
        iconName="git-branch"
        text={
          <Text>
            {t('{actor} restored this branch', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  handleCrossReferencedEvent(event) {
    return (
      <Event
        iconName="link"
        text={
          <Text>
            {t('{actor} referenced this from {source}', this.props.locale, {
              actor: (
                <ActorLink actor={event.actor} onPress={this.onPressUser} />
              ),
              source: (
                <BoldText onPress={() => this.onPressIssue(event.source)}>
                  {'#' + event.source.number}
                </BoldText>
              ),
            })}
          </Text>
        }
        createdAt={event.createdAt}
      />
    );
  }

  // This is a fake event created by formatEventsToRender()
  handleLabelGroupEvent(event) {
    return <LabelGroup group={event} onPressUser={this.onPressUser} />;
  }

  render() {
    const { repository, event } = this.props;
    const handler = `handle${event.__typename}`;

    if (typeof this[handler] === 'function') {
      return this[handler](event, repository);
    }

    console.log('Unhandled event type: ' + event.__typename);

    return null;
  }
}

class Event extends Component {
  props: {
    iconName: String,
    iconColor: String,
    iconBackgroundColor: String,
    text: React.Element<*>,
    createdAt: String,
  };

  render() {
    const {
      text,
      createdAt,
      iconName,
      iconColor = '#586069',
      iconBackgroundColor = '#E6EBF1',
    } = this.props;

    return (
      <Container>
        <Icon
          name={iconName}
          type="octicon"
          size={16}
          color={iconColor}
          backgroundColor={iconBackgroundColor}
        />
        <ContentContainer>
          <EventTextContainer>{text}</EventTextContainer>
          <DateContainer>
            <Date>{relativeTimeToNow(createdAt)}</Date>
          </DateContainer>
        </ContentContainer>
      </Container>
    );
  }
}

class LabelGroup extends Component {
  props: {
    group: Object,
    onPressUser: Function,
  };

  render() {
    const { actor, labeled, unlabeled, createdAt } = this.props.group;

    const toInlineLabel = (type, { label }, index) => (
      <InlineLabel key={type + index} label={label} />
    );

    /* eslint-disable react/jsx-no-bind */
    const labels = labeled.map(toInlineLabel.bind(null, 'added'));
    const unlabels = unlabeled.map(toInlineLabel.bind(null, 'removed'));

    let textChildren = [
      <ActorLink key="actor" actor={actor} onPress={this.props.onPressUser} />,
    ];

    if (labels.length) {
      textChildren = [
        ...textChildren,
        <Text key="added"> added </Text>,
        ...labels,
      ];
    }

    if (labels.length && unlabels.length) {
      textChildren.push(<Text key="and"> and</Text>);
    }

    if (unlabels.length) {
      textChildren = [
        ...textChildren,
        <Text key="removed"> removed </Text>,
        ...unlabels,
      ];
    }

    return <Event iconName="tag" text={textChildren} createdAt={createdAt} />;
  }
}

class ActorLink extends Component {
  props: {
    actor: Object,
    onPress: Function,
  };

  render() {
    const { actor, onPress } = this.props;

    return (
      <BoldText
        onPress={() => {
          onPress(actor);
        }}
      >
        {actor.login}
      </BoldText>
    );
  }
}
