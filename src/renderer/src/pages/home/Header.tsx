import { NavbarCenter } from '@renderer/components/app/Navbar'
import { isMac } from '@renderer/config/constant'
import { useAssistant } from '@renderer/hooks/useAssistant'
import { useShowAssistants } from '@renderer/hooks/useStore'
import { Assistant } from '@renderer/types'
import { removeLeadingEmoji } from '@renderer/utils'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import SelectModelButton from './components/SelectModelButton'
import { NewButton } from './HomePage'

interface Props {
  activeAssistant: Assistant
}

const HomeHeader: FC<Props> = ({ activeAssistant }) => {
  const { assistant } = useAssistant(activeAssistant.id)
  const { t } = useTranslation()
  const { showAssistants, toggleShowAssistants } = useShowAssistants()

  return (
    <NavbarCenter style={{ paddingLeft: isMac ? 16 : 8 }}>
      {!showAssistants && (
        <NewButton onClick={toggleShowAssistants} style={{ marginRight: isMac ? 8 : 25 }}>
          <i className="iconfont icon-showsidebarhoriz" />
        </NewButton>
      )}
      <AssistantName>{removeLeadingEmoji(assistant?.name) || t('chat.default.name')}</AssistantName>
      <SelectModelButton assistant={assistant} />
    </NavbarCenter>
  )
}

const AssistantName = styled.span`
  margin-left: 5px;
  margin-right: 10px;
  font-family: Ubuntu;
`

export default HomeHeader
