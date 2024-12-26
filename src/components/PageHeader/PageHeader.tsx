import React from 'react'

interface PageHeaderProps {
  title: string
  description?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
  <header>
    <h1 className="mb-4 text-4xl font-medium">{title}</h1>
    <p className="mb-4 text-left">{description}</p>
    <hr className="w-full border-none bg-black" style={{ height: '1px' }} />
  </header>
)
