import React from 'react'
import { Typography } from 'antd'

const { Title, Text } = Typography

const SectionHeader = ({ main, secondary }) => (
    <>
        <Title level={2} style={{ marginBottom: '2rem' }}>
            {main}
        </Title>
        <div style={{ marginBottom: '2rem' }}>
            <Text type="secondary" style={{ fontSize: '20px' }}>
                {secondary}
            </Text>
        </div>
    </>
)

export default SectionHeader
