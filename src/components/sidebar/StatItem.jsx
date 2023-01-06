const StatItem = ({ title = '', number = Number }) => {
  return (
    <a href='' className='sidebar__stat'>
      <p>{title}</p>
      <p className='sidebar__stat-number'>
        {number}
      </p>
    </a>
  )
}

export default StatItem
