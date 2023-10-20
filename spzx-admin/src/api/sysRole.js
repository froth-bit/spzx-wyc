import request from '@/utils/request'

const base_api = '/admin/system/sysRole'

export const GetSysRoleListByPage = (current,limit,queryDto) => {
    return request({
        url: `${base_api}/findByPage/${current}/${limit}`,
        method:'post',
        data:queryDto,
    })
}

export const SaveSysRole = (sysRole) => {
    return request({
        url: `${base_api}/saveSysRole`,
        method:'post',
        data:sysRole,
    })
}

export const UpdateSysRole = (sysRole) => {
    return request({
        url: `${base_api}/updateSysRole`,
        method:'put',
        data:sysRole,
    })
}

export const DeleteSysRole = (roleId) => {
    return request({
        url: `${base_api}/deleteSysRole/${roleId}`,
        method:'delete'
    })
}