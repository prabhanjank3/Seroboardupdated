import React from 'react';
import { Center, Flex, Icon, Select, Text } from '@chakra-ui/react';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

export default (props) => {
    return <Select>
        <option value='1'>
            Defined
        </option>
        <option value='2'>
            In Progress
        </option>
        <option value='3'>
            Completed
        </option>
        <option value='4'>
            Accepted
        </option>
        <option value='5'>
            Blocked
        </option>
    </Select>
}