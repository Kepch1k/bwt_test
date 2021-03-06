// Удаление строкового значения из атрибута(если такое есть)
const remove_string_value_from_attribute = (element, attribute, value) =>
{
    let element_attribute = element.getAttribute(attribute) || "";
    const index_of_needed_value = element_attribute.indexOf(value);
    if(index_of_needed_value != -1)
    {
        element_attribute=element_attribute.replace(new RegExp(`^${value}`),``);
        element_attribute=element_attribute.replace(new RegExp(` ${value}`),``);
        element_attribute=element_attribute.replace(/  /g,` `);
        if(element_attribute[0]==" ")
        {
            element_attribute=element_attribute.replace(` `,``);
        }
    }
    element.setAttribute(attribute,element_attribute);
}  

// Добавление строкового значения в атрибут(если такого нет)
const add_string_value_to_attribute = (element, attribute, value) =>
{
    let element_attribute = element.getAttribute(attribute) || "";
    const index_of_needed_value = element_attribute.match(new RegExp(`^${value}`)) || element_attribute.match(new RegExp(` ${value}`));
    if( ! index_of_needed_value)
    {
        if(element_attribute.length == 0)
        {
            element_attribute += `${value}`;
        }
        else
        {
            element_attribute += ` ${value}`;
        }
    }
    element.setAttribute(attribute,element_attribute);
}  

// Переключение строкового значения в атрибуте(есть/нет)
const toggle_string_value_in_attribute = (element, attribute, value) =>
{
    let element_attribute = element.getAttribute(attribute) || "";
    const index_of_needed_value = element_attribute.indexOf(value);
    if(index_of_needed_value == -1)
    {
        add_string_value_to_attribute(element, attribute, value);
    }
    else
    {
        remove_string_value_from_attribute(element, attribute, value);
    }
    element.setAttribute(attribute,element_attribute);
}  