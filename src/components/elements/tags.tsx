import React from 'react'
interface Props {
  text: string
}

export const DefaultTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const DarkTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const RedTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const GreenTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const YellowTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const IndigoTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const PurpleTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}

export const PinkTag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{text}</span>
  )
}