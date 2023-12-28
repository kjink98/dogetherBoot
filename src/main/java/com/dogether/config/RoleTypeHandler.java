package com.dogether.config;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

import com.dogether.domain.Role;

public class RoleTypeHandler implements TypeHandler<Role> {
    @Override
    public void setParameter(PreparedStatement ps, int i, Role parameter, JdbcType jdbcType) throws SQLException {
        if (parameter != null) {
            ps.setString(i, parameter.getKey());
        } else {
            ps.setNull(i, Types.VARCHAR);
        }
    }

    @Override
    public Role getResult(ResultSet rs, String columnName) throws SQLException {
        String key = rs.getString(columnName);
        return key != null ? Role.valueOf(key) : null;
    }

    @Override
    public Role getResult(ResultSet rs, int columnIndex) throws SQLException {
        String key = rs.getString(columnIndex);
        return key != null ? Role.valueOf(key) : null;
    }

    @Override
    public Role getResult(CallableStatement cs, int columnIndex) throws SQLException {
        String key = cs.getString(columnIndex);
        return key != null ? Role.valueOf(key) : null;
    }
}
