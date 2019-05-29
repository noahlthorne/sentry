import PropTypes from 'prop-types';
import React from 'react';
import GroupEventDataSection from 'app/components/events/eventDataSection';
import SentryTypes from 'app/sentryTypes';
import Frame from 'app/components/events/interfaces/frame';
import {t} from 'app/locale';

class TemplateInterface extends React.Component {
  static propTypes = {
    event: SentryTypes.Event.isRequired,
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <GroupEventDataSection
        event={this.props.event}
        type={this.props.type}
        title={<div>{t('Template')}</div>}
      >
        <div className="traceback no-exception">
          <ul>
            <Frame data={this.props.data} isExpanded={true} />
          </ul>
        </div>
      </GroupEventDataSection>
    );
  }
}

export default TemplateInterface;
