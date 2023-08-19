const optionCreate = ({ selected = false, textContent, value = "", disabled = false }) => {
  const option = document.createElement("option")
  option.disabled = disabled
  option.selected = selected
  option.value = value
  option.textContent = textContent
  return option
}

const selectHtmlGenerator = (optionsArray, name) => {
  const select = document.createElement("select")
  select.name = name

  optionsArray.map(({ selected, textContent, value, disabled }) => {
    select.appendChild(optionCreate({ selected, textContent, value, disabled }))
  })

  return select
}

export default selectHtmlGenerator