import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const LinkKeivin = ({ render, intl }) => {
  return render([
    {
      name: intl.formatMessage({ id: 'store/userKeivin.link' }),
      path: '/keivin',
    },
  ])
}

LinkKeivin.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(LinkKeivin)
