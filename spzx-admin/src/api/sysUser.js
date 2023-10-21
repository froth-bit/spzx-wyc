import request from '@/utils/request'

const base_api = '/admin/system/sysUser'

export const GetSysUserListByPage = (current,limit,queryDto) => {
    return request({
        url: `${base_api}/findByPage/${current}/${limit}`,
        method:'get',
        params:queryDto,
    })
}

export const SaveSysUser = (queryDto) => {
    return request({
        url: `${base_api}/saveSysUser`,
        method:'post',
        data:queryDto,
    })
}

export const UpdateSysUser = (queryDto) => {
    return request({
        url: `${base_api}/updateSysUser`,
        method:'put',
        data:queryDto,
    })
}

export const DeleteSysUser = (userId) => {
    return request({
        url: `${base_api}/deleteSysUser/${userId}`,
        method:'delete'
    })
}

export const DoAssignRoleToUser = (assginRoleVo) => {
    return request({
        url: `${base_api}/saveAssignRole`,
        method:'post',
        data:assginRoleVo,
    })
}