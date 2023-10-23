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

export const GetAllRoleList = (userId) => {
    return request({
        url: `${base_api}/findAllRole/${userId}`,
        method:'get'
    })
}

export const GetSysRoleMenuIds = (roleId) => {
    return request({
        url: `admin/system/sysRoleMenu/findSysRoleMenuByRoleId/${roleId}`,
        method:'get'
    })
}

export const DoAssignMenuIdToSysRole = (assignMenuDto) => {
    return request({
        url: `admin/system/sysRoleMenu/doAssign`,
        method:'post',
        data:assignMenuDto
    })
}